import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "aws",
  },
  grepInvert: [
    /@streaming/,
    /@trailingSlash/
  ],
  webServer: {
    command: "npm run serve.aws",
    port: 4000,
  },
};

export default config;
