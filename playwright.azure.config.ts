import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "azure",
  },

  use: {
    baseURL: "https://blue-smoke-0a7cdfe10.2.azurestaticapps.net/",
  },
  retries: 2,
  webServer: undefined,
};

export default config;
