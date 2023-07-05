import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "vercel-edge",
  },

  use: {
    baseURL: "https://qwik-city-e2e.vercel.app/",
  },
  retries: 2,
  webServer: undefined,
};

export default config;
