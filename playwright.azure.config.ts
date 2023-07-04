import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "azure",
  },
  grepInvert: [
    /@streaming/,
  ],
  webServer: {
    command: "pnpm run serve.azure",
    port: 4280,
    timeout: 120 * 1000,
  },
};

export default config;
