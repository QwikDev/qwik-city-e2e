import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "vercel-serverless", 
  },

  use: {
    baseURL: "https://qwik-vercel-serverless-for-e2e.vercel.app/",
  },
  retries: 2,
  webServer: undefined,
};

export default config;
