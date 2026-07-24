import { createHash } from 'node:crypto';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import process from 'node:process';

const FIXED_DOS_DATE = 0x0021; // 1980-01-01
const FIXED_DOS_TIME = 0x0000;
const ZIP_LOCAL_FILE_HEADER = 0x04034b50;
const ZIP_CENTRAL_DIRECTORY_HEADER = 0x02014b50;
const ZIP_END_OF_CENTRAL_DIRECTORY = 0x06054b50;
const ZIP_UTF8_FLAG = 0x0800;
const ZIP_STORE_METHOD = 0;
const ROOT = 'ai-storylab-1';

function sha256Buffer(buffer) {
  return createHash('sha256').update(buffer).digest('hex');
}

function sha256File(path) {
  return sha256Buffer(readFileSync(path));
}

function toPosix(path) {
  return path.split(sep).join('/');
}

function walkFiles(root) {
  const output = [];
  const visit = (current) => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const absolute = join(current, entry.name);
      if (entry.isDirectory()) {
        visit(absolute);
      } else if (entry.isFile()) {
        output.push(absolute);
      }
    }
  };
  visit(root);
  return output;
}

function parseArgs(argv) {
  const args = new Map();
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith('--')) {
      throw new Error(`Unexpected argument: ${token}`);
    }
    const value = argv[index + 1];
    if (value === undefined || value.startsWith('--')) {
      throw new Error(`Missing value for ${token}`);
    }
    args.set(token.slice(2), value);
    index += 1;
  }
  return args;
}

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      const mask = -(crc & 1);
      crc = (crc >>> 1) ^ (0xedb88320 & mask);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function localHeader(nameBuffer, dataBuffer, crc) {
  const header = Buffer.alloc(30);
  header.writeUInt32LE(ZIP_LOCAL_FILE_HEADER, 0);
  header.writeUInt16LE(20, 4);
  header.writeUInt16LE(ZIP_UTF8_FLAG, 6);
  header.writeUInt16LE(ZIP_STORE_METHOD, 8);
  header.writeUInt16LE(FIXED_DOS_TIME, 10);
  header.writeUInt16LE(FIXED_DOS_DATE, 12);
  header.writeUInt32LE(crc, 14);
  header.writeUInt32LE(dataBuffer.length, 18);
  header.writeUInt32LE(dataBuffer.length, 22);
  header.writeUInt16LE(nameBuffer.length, 26);
  header.writeUInt16LE(0, 28);
  return header;
}

function centralHeader(nameBuffer, dataBuffer, crc, localOffset) {
  const header = Buffer.alloc(46);
  header.writeUInt32LE(ZIP_CENTRAL_DIRECTORY_HEADER, 0);
  header.writeUInt16LE(0x0314, 4); // Unix, ZIP 2.0
  header.writeUInt16LE(20, 6);
  header.writeUInt16LE(ZIP_UTF8_FLAG, 8);
  header.writeUInt16LE(ZIP_STORE_METHOD, 10);
  header.writeUInt16LE(FIXED_DOS_TIME, 12);
  header.writeUInt16LE(FIXED_DOS_DATE, 14);
  header.writeUInt32LE(crc, 16);
  header.writeUInt32LE(dataBuffer.length, 20);
  header.writeUInt32LE(dataBuffer.length, 24);
  header.writeUInt16LE(nameBuffer.length, 28);
  header.writeUInt16LE(0, 30);
  header.writeUInt16LE(0, 32);
  header.writeUInt16LE(0, 34);
  header.writeUInt16LE(0, 36);
  header.writeUInt32LE((0o100644 << 16) >>> 0, 38);
  header.writeUInt32LE(localOffset, 42);
  return header;
}

function createZip(entries) {
  const localParts = [];
  const centralParts = [];
  let localOffset = 0;

  for (const entry of entries) {
    const nameBuffer = Buffer.from(entry.path, 'utf8');
    const dataBuffer = entry.data;
    const crc = crc32(dataBuffer);
    const local = localHeader(nameBuffer, dataBuffer, crc);
    localParts.push(local, nameBuffer, dataBuffer);
    centralParts.push(
      centralHeader(nameBuffer, dataBuffer, crc, localOffset),
      nameBuffer,
    );
    localOffset += local.length + nameBuffer.length + dataBuffer.length;
  }

  const centralDirectory = Buffer.concat(centralParts);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(ZIP_END_OF_CENTRAL_DIRECTORY, 0);
  end.writeUInt16LE(0, 4);
  end.writeUInt16LE(0, 6);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(centralDirectory.length, 12);
  end.writeUInt32LE(localOffset, 16);
  end.writeUInt16LE(0, 20);

  return Buffer.concat([...localParts, centralDirectory, end]);
}

function parseStoredZip(buffer) {
  const entries = new Map();
  let offset = 0;
  while (offset + 4 <= buffer.length) {
    const signature = buffer.readUInt32LE(offset);
    if (signature === ZIP_CENTRAL_DIRECTORY_HEADER || signature === ZIP_END_OF_CENTRAL_DIRECTORY) {
      break;
    }
    if (signature !== ZIP_LOCAL_FILE_HEADER) {
      throw new Error(`Unexpected ZIP signature at offset ${offset}`);
    }
    const flags = buffer.readUInt16LE(offset + 6);
    const method = buffer.readUInt16LE(offset + 8);
    const time = buffer.readUInt16LE(offset + 10);
    const date = buffer.readUInt16LE(offset + 12);
    const expectedCrc = buffer.readUInt32LE(offset + 14);
    const compressedSize = buffer.readUInt32LE(offset + 18);
    const uncompressedSize = buffer.readUInt32LE(offset + 22);
    const nameLength = buffer.readUInt16LE(offset + 26);
    const extraLength = buffer.readUInt16LE(offset + 28);
    if (flags !== ZIP_UTF8_FLAG || method !== ZIP_STORE_METHOD) {
      throw new Error('Artifact must use UTF-8 stored ZIP entries');
    }
    if (time !== FIXED_DOS_TIME || date !== FIXED_DOS_DATE) {
      throw new Error('Artifact contains non-deterministic ZIP timestamps');
    }
    if (compressedSize !== uncompressedSize) {
      throw new Error('Stored ZIP entry size mismatch');
    }
    const nameStart = offset + 30;
    const nameEnd = nameStart + nameLength;
    const dataStart = nameEnd + extraLength;
    const dataEnd = dataStart + compressedSize;
    if (dataEnd > buffer.length) {
      throw new Error('Truncated ZIP entry');
    }
    const name = buffer.subarray(nameStart, nameEnd).toString('utf8');
    const data = buffer.subarray(dataStart, dataEnd);
    if (crc32(data) !== expectedCrc) {
      throw new Error(`CRC mismatch: ${name}`);
    }
    if (entries.has(name)) {
      throw new Error(`Duplicate ZIP entry: ${name}`);
    }
    entries.set(name, Buffer.from(data));
    offset = dataEnd;
  }
  return entries;
}

function canonicalJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function buildPackageEntries(sourceRoot, metadata) {
  const appEntries = walkFiles(sourceRoot)
    .map((absolute) => {
      const path = toPosix(relative(sourceRoot, absolute));
      const data = readFileSync(absolute);
      return {
        sourcePath: path,
        path: `${ROOT}/app/${path}`,
        data,
        sha256: sha256Buffer(data),
        size: data.length,
      };
    })
    .sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0));

  if (appEntries.length === 0) {
    throw new Error('Source dist directory is empty');
  }

  const manifest = {
    schemaVersion: 1,
    artifactId: 'AI_STORYLAB_1_V09_CANDIDATE_PACKAGE',
    candidateVersion: metadata.candidateVersion,
    publicationStatus: 'UNPUBLISHED_CANDIDATE_EVIDENCE',
    applicationPackageVersion: metadata.applicationPackageVersion,
    sourceCommit: metadata.sourceCommit,
    packagingFormat: 'DETERMINISTIC_ZIP_STORE',
    fixedZipTimestamp: '1980-01-01T00:00:00Z',
    binaryReproducibilityTarget: true,
    versionDriftStatus: 'PENDING_H09_6',
    supportClaims: {
      nodeBuildRuntime: [22, 24],
      browserSupport: 'NOT_CLAIMED',
      windowsSupport: 'NOT_CLAIMED',
      fileProtocol: 'NOT_CLAIMED',
    },
    files: appEntries.map(({ sourcePath, sha256, size }) => ({
      path: `app/${sourcePath}`,
      sha256,
      size,
    })),
  };

  const checksums = appEntries
    .map(({ sourcePath, sha256 }) => `${sha256}  app/${sourcePath}\n`)
    .join('');

  const readme = [
    'AI StoryLab 1 v0.9.0 candidate evidence package',
    '',
    'Status: unpublished validation artifact. This is not a release.',
    `Source commit: ${metadata.sourceCommit}`,
    `Application package version: ${metadata.applicationPackageVersion}`,
    '',
    'Serve the app/ directory through a local HTTP server.',
    'Direct file:// execution is not claimed.',
    'Browser and Windows support are not claimed by this package.',
    '',
  ].join('\n');

  const verify = [
    'Verification',
    '',
    '1. Confirm the ZIP SHA-256 distributed with the evidence bundle.',
    '2. Extract the package.',
    '3. Recalculate SHA-256 for every file listed in CHECKSUMS.sha256.',
    '4. Confirm MANIFEST.json sourceCommit and candidateVersion.',
    '',
    'The ZIP uses stored entries, fixed timestamps, sorted paths and fixed permissions.',
    '',
  ].join('\n');

  const metadataEntries = [
    {
      path: `${ROOT}/CHECKSUMS.sha256`,
      data: Buffer.from(checksums, 'utf8'),
    },
    {
      path: `${ROOT}/MANIFEST.json`,
      data: Buffer.from(canonicalJson(manifest), 'utf8'),
    },
    {
      path: `${ROOT}/README.txt`,
      data: Buffer.from(readme, 'utf8'),
    },
    {
      path: `${ROOT}/VERIFY.txt`,
      data: Buffer.from(verify, 'utf8'),
    },
  ];

  return [...appEntries.map(({ path, data }) => ({ path, data })), ...metadataEntries]
    .sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0));
}

function verifyArtifact(path) {
  const buffer = readFileSync(path);
  const entries = parseStoredZip(buffer);
  const required = [
    `${ROOT}/CHECKSUMS.sha256`,
    `${ROOT}/MANIFEST.json`,
    `${ROOT}/README.txt`,
    `${ROOT}/VERIFY.txt`,
  ];
  for (const name of required) {
    if (!entries.has(name)) {
      throw new Error(`Missing required artifact entry: ${name}`);
    }
  }
  const manifest = JSON.parse(entries.get(`${ROOT}/MANIFEST.json`).toString('utf8'));
  const checksumLines = entries
    .get(`${ROOT}/CHECKSUMS.sha256`)
    .toString('utf8')
    .split('\n')
    .filter(Boolean);
  const declared = new Map();
  for (const line of checksumLines) {
    const match = /^([0-9a-f]{64})  (.+)$/.exec(line);
    if (!match) {
      throw new Error(`Invalid checksum line: ${line}`);
    }
    declared.set(match[2], match[1]);
  }
  for (const file of manifest.files) {
    const entryName = `${ROOT}/${file.path}`;
    const data = entries.get(entryName);
    if (!data) {
      throw new Error(`Manifest file missing from ZIP: ${file.path}`);
    }
    const digest = sha256Buffer(data);
    if (digest !== file.sha256 || declared.get(file.path) !== digest || data.length !== file.size) {
      throw new Error(`Artifact integrity mismatch: ${file.path}`);
    }
  }
  return {
    status: 'PASS',
    artifactSha256: sha256Buffer(buffer),
    artifactSize: buffer.length,
    entries: entries.size,
    applicationFiles: manifest.files.length,
    manifest,
  };
}

function writeReport(reportPath, report) {
  if (!reportPath) {
    return;
  }
  const absolute = resolve(reportPath);
  mkdirSync(dirname(absolute), { recursive: true });
  writeFileSync(absolute, canonicalJson(report), 'utf8');
}

const args = parseArgs(process.argv.slice(2));
const verifyPath = args.get('verify');

if (verifyPath) {
  const report = verifyArtifact(resolve(verifyPath));
  writeReport(args.get('report'), report);
  process.stdout.write(canonicalJson(report));
} else {
  const source = resolve(args.get('source') ?? 'dist');
  const output = resolve(args.get('output') ?? 'candidate.zip');
  const sourceCommit = args.get('commit');
  const candidateVersion = args.get('candidate-version') ?? '0.9.0-unreleased';
  if (!sourceCommit || !/^[0-9a-f]{40}$/.test(sourceCommit)) {
    throw new Error('--commit must be a full 40-character Git SHA');
  }
  if (!existsSync(source) || !statSync(source).isDirectory()) {
    throw new Error(`Source directory not found: ${source}`);
  }
  const packageJson = JSON.parse(
    readFileSync(fileURLToPath(new URL('../package.json', import.meta.url)), 'utf8'),
  );
  const entries = buildPackageEntries(source, {
    sourceCommit,
    candidateVersion,
    applicationPackageVersion: packageJson.version,
  });
  const zip = createZip(entries);
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, zip);
  const report = verifyArtifact(output);
  writeReport(args.get('report'), report);
  process.stdout.write(canonicalJson(report));
}
