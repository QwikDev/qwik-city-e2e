import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "vercel",
  },

  use: {
    baseURL: "https://qwik-city-e2e.vercel.app/",
  },

  webServer: undefined,
};

export default config;
