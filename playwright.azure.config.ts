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
    command: "npm run serve.azure",
    port: 4280,
  },
};

export default config;
