import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "fastly",
  },

  use: {
    baseURL: "https://qwik-city-e2e.edgecompute.app/",
  },
  retries: 2,
  webServer: undefined,
};

export default config;
