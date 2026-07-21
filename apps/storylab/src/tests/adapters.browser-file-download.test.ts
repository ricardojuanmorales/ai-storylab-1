import { describe, expect, it, vi } from "vitest";
import { createBrowserFileDownloader } from "../adapters/browser/browser-file-download";

const BlobDouble = class {
  public constructor(
    readonly parts: readonly BlobPart[],
    readonly options?: BlobPropertyBag,
  ) {}
} as unknown as typeof Blob;

const createDocumentDouble = () => {
  const anchor = {
    href: "",
    download: "",
    rel: "",
    click: vi.fn(),
    remove: vi.fn(),
  };
  const append = vi.fn();
  const createElement = vi.fn(
    () => anchor as unknown as HTMLAnchorElement,
  );
  const documentApi = {
    createElement,
    body: { append },
  } as unknown as Document;

  return {
    anchor,
    append,
    createElement,
    documentApi,
  };
};

describe("browser local file downloader", () => {
  it("crea y activa un enlace de descarga local", async () => {
    const createObjectURL = vi.fn(
      () => "blob:storylab-synthetic",
    );
    const revokeObjectURL = vi.fn();
    const {
      anchor,
      append,
      createElement,
      documentApi,
    } = createDocumentDouble();

    const downloader = createBrowserFileDownloader({
      documentApi,
      urlApi: {
        createObjectURL,
        revokeObjectURL,
      },
      BlobCtor: BlobDouble,
    });

    expect(
      await downloader.download({
        fileName: "portfolio.storylab.json",
        mediaType: "application/json",
        content: '{"synthetic":true}\n',
      }),
    ).toEqual({ ok: true, value: undefined });

    expect(createElement).toHaveBeenCalledWith("a");
    expect(anchor.href).toBe("blob:storylab-synthetic");
    expect(anchor.download).toBe(
      "portfolio.storylab.json",
    );
    expect(anchor.rel).toBe("noopener");
    expect(append).toHaveBeenCalledWith(anchor);
    expect(anchor.click).toHaveBeenCalledTimes(1);
    expect(anchor.remove).toHaveBeenCalledTimes(1);
    expect(revokeObjectURL).toHaveBeenCalledWith(
      "blob:storylab-synthetic",
    );
  });

  it("devuelve un error seguro si el navegador no puede descargar", async () => {
    const { documentApi } = createDocumentDouble();
    const revokeObjectURL = vi.fn();
    const downloader = createBrowserFileDownloader({
      documentApi,
      urlApi: {
        createObjectURL: () => {
          throw new Error("synthetic failure");
        },
        revokeObjectURL,
      },
      BlobCtor: BlobDouble,
    });

    expect(
      await downloader.download({
        fileName: "portfolio.storylab.json",
        mediaType: "application/json",
        content: "{}\n",
      }),
    ).toMatchObject({
      ok: false,
      error: { code: "EXPORT_DOWNLOAD_FAILED" },
    });
    expect(revokeObjectURL).not.toHaveBeenCalled();
  });
});
