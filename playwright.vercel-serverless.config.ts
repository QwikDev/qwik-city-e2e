import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "vercel-serverless",
  },

  use: {
    baseURL: "https://qwik-city-build-serverless.vercel.app/",
  },
  retries: 2,
  webServer: undefined,
};

export default config;
