import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "cloudflare",
  },

  use: {
    baseURL: "https://qwik-city-e2e.pages.dev/",
  },

  webServer: undefined,
};

export default config;
