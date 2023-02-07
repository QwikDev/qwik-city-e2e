import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "azure",
  },

  use: {
    baseURL: "https://AZURE.TODO.URL/",
  },

  webServer: undefined,
};

export default config;
