import type {
  PortfolioExportService,
  PortfolioImportService,
  PortfolioImportStagingService,
} from "../application";
import type { UntrustedLocalFile } from "../ports";

export interface PortfolioTransferRuntime {
  readonly exportService: PortfolioExportService;
  readonly importStaging: PortfolioImportStagingService;
  readonly importService: PortfolioImportService;
  readonly toUntrustedLocalFile: (
    file: File,
  ) => UntrustedLocalFile;
}
