import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "aws",
  },
  grepInvert: [
    /@streaming/,
  ],
  use: {
    baseURL: "https://3psthbqcak.execute-api.us-west-1.amazonaws.com/",
  },
  retries: 2,
  webServer: undefined,
};

export default config;
