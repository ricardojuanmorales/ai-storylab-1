import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve, sep } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const appRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const manifestPath = join(appRoot, "candidate-suite.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));

function sha256Buffer(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

function sha256File(path) {
  return sha256Buffer(readFileSync(path));
}

function walkFiles(root) {
  if (!existsSync(root)) {
    return [];
  }

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

function toPosix(path) {
  return path.split(sep).join("/");
}

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: appRoot,
    env: process.env,
    stdio: "inherit",
  });

  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(
      `Command failed (${result.status}): ${command} ${args.join(" ")}`,
    );
  }
}

function parseVitestReport(report) {
  const testResults = Array.isArray(report.testResults)
    ? report.testResults
    : [];

  // Vitest's numTotalTestSuites counts nested suites/describe blocks.
  // Candidate inventory is file-based, so testResults is authoritative.
  const totalFiles = testResults.length;
  const passedFiles = testResults.filter(
    (item) => item.status === "passed",
  ).length;

  const assertions = testResults.flatMap((item) =>
    Array.isArray(item.assertionResults) ? item.assertionResults : [],
  );

  const totalTests =
    report.numTotalTests ??
    assertions.length;

  const passedTests =
    report.numPassedTests ??
    assertions.filter((item) => item.status === "passed").length;

  return {
    success: report.success === true,
    totalFiles,
    passedFiles,
    totalTests,
    passedTests,
    reportedTestSuites: report.numTotalTestSuites ?? null,
  };
}

function buildDistManifest() {
  const distRoot = join(appRoot, "dist");
  const files = walkFiles(distRoot)
    .map((absolute) => ({
      absolute,
      path: toPosix(relative(distRoot, absolute)),
    }))
    .sort((a, b) => a.path.localeCompare(b.path));

  const entries = files.map(({ absolute, path }) => ({
    path,
    sha256: sha256File(absolute),
    size: statSync(absolute).size,
  }));

  const canonical = entries
    .map((entry) => `${entry.sha256}  ${entry.path}\n`)
    .join("");

  return {
    files: entries,
    sha256: sha256Buffer(Buffer.from(canonical, "utf8")),
  };
}

const startedAt = new Date().toISOString();
const nodeMajor = Number(process.versions.node.split(".")[0]);

if (!manifest.supportedNodeMajors.includes(nodeMajor)) {
  throw new Error(
    `Unsupported Node major ${nodeMajor}; expected ${manifest.supportedNodeMajors.join(", ")}`,
  );
}

const testPattern = /\.test\.(ts|tsx|js|jsx|mjs|cjs)$/;
const testInventory = walkFiles(join(appRoot, "src", "tests"))
  .filter((path) => testPattern.test(path))
  .map((path) => toPosix(relative(appRoot, path)))
  .sort();

const inventoryCanonical = testInventory
  .map((path) => `${path}\n`)
  .join("");
const inventorySha256 = sha256Buffer(
  Buffer.from(inventoryCanonical, "utf8"),
);

if (testInventory.length !== manifest.expectedTestFiles) {
  throw new Error(
    `Test file count changed: expected ${manifest.expectedTestFiles}, got ${testInventory.length}`,
  );
}

if (inventorySha256 !== manifest.testInventorySha256) {
  throw new Error(
    `Test inventory hash changed: expected ${manifest.testInventorySha256}, got ${inventorySha256}`,
  );
}

const tempRoot = mkdtempSync(join(tmpdir(), "ai-storylab-v10-stable-"));
const vitestReportPath = join(tempRoot, "vitest.json");
const packageOnePath = join(tempRoot, "stable-one.zip");
const packageTwoPath = join(tempRoot, "stable-two.zip");
const packageOneReportPath = join(tempRoot, "stable-one.json");
const packageTwoReportPath = join(tempRoot, "stable-two.json");
const sourceCommit =
  process.env.AI_STORYLAB_SOURCE_COMMIT ??
  process.env.GITHUB_SHA;

if (!sourceCommit || !/^[0-9a-f]{40}$/.test(sourceCommit)) {
  throw new Error(
    "AI_STORYLAB_SOURCE_COMMIT or GITHUB_SHA must be a full Git SHA",
  );
}

try {
  run("npm", ["run", "typecheck"]);
  run("npm", ["run", "build"]);
  run("npm", ["run", "audit:architecture"]);
  run("npm", ["run", "audit:secrets"]);
  run("npm", ["run", "audit:privacy"]);
  run("npm", ["run", "audit:vertical-slice"]);

  const vitestCli = join(appRoot, "node_modules", "vitest", "vitest.mjs");
  run(process.execPath, [
    vitestCli,
    "run",
    "--reporter=json",
    `--outputFile=${vitestReportPath}`,
  ]);

  const vitestRaw = JSON.parse(readFileSync(vitestReportPath, "utf8"));
  const vitest = parseVitestReport(vitestRaw);

  if (
    !vitest.success ||
    vitest.totalFiles !== manifest.expectedTestFiles ||
    vitest.passedFiles !== manifest.expectedTestFiles ||
    vitest.totalTests !== manifest.expectedTests ||
    vitest.passedTests !== manifest.expectedTests
  ) {
    throw new Error(
      `Stable suite mismatch: ${JSON.stringify(vitest)}`,
    );
  }

  const dist = buildDistManifest();
  const lockSha256 = sha256File(join(appRoot, "package-lock.json"));
  const packageTool = join(appRoot, "tools", "package-candidate.mjs");
  const releaseVersion =
    manifest.artifactContract?.releaseVersion ??
    "1.0.0";

  for (const [output, reportPath] of [
    [packageOnePath, packageOneReportPath],
    [packageTwoPath, packageTwoReportPath],
  ]) {
    run(process.execPath, [
      packageTool,
      "--source",
      join(appRoot, "dist"),
      "--output",
      output,
      "--commit",
      sourceCommit,
      "--release-version",
      releaseVersion,
      "--report",
      reportPath,
    ]);
  }

  const packageOne = JSON.parse(readFileSync(packageOneReportPath, "utf8"));
  const packageTwo = JSON.parse(readFileSync(packageTwoReportPath, "utf8"));

  if (
    packageOne.status !== "PASS" ||
    packageTwo.status !== "PASS" ||
    packageOne.artifactSha256 !== packageTwo.artifactSha256 ||
    sha256File(packageOnePath) !== sha256File(packageTwoPath)
  ) {
    throw new Error("Binary artifact mismatch");
  }

  process.stdout.write(
    `AI_STORYLAB_STABLE_ARTIFACT_SHA256=${packageOne.artifactSha256}\n`,
  );

  const report = {
    schemaVersion: 1,
    suiteId: manifest.suiteId,
    status: "PASS",
    startedAt,
    completedAt: new Date().toISOString(),
    environment: {
      node: process.version,
      npm: process.env.npm_config_user_agent ?? null,
      platform: process.platform,
      arch: process.arch,
    },
    suite: {
      expectedTestFiles: manifest.expectedTestFiles,
      expectedTests: manifest.expectedTests,
      actualTestFiles: vitest.totalFiles,
      actualTests: vitest.totalTests,
      testInventorySha256: inventorySha256,
      packageLockSha256: lockSha256,
    },
    build: {
      reproducibilityStandard: manifest.reproducibilityStandard,
      distManifestSha256: dist.sha256,
      files: dist.files,
    },
    artifact: {
      status: "PASS",
      format: "DETERMINISTIC_ZIP_STORE",
      sourceCommit,
      releaseVersion,
      binaryReproducibility: "PASS",
      artifactSha256: packageOne.artifactSha256,
      artifactSize: packageOne.artifactSize,
      entries: packageOne.entries,
      applicationFiles: packageOne.applicationFiles,
      manifest: packageOne.manifest,
    },
  };

  const requestedReport = process.env.AI_STORYLAB_VERIFY_REPORT;
  if (requestedReport) {
    const absoluteReport = resolve(requestedReport);
    mkdirSync(dirname(absoluteReport), { recursive: true });
    writeFileSync(
      absoluteReport,
      `${JSON.stringify(report, null, 2)}\n`,
      "utf8",
    );
  }

  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
} finally {
  rmSync(tempRoot, { recursive: true, force: true });
}
