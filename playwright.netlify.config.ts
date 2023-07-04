import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "netlify",
  },
  grepInvert: [
    /@streaming/,
  ],
  use: {
    baseURL: "https://qwik-city-e2e.netlify.app/",
  },
  retries: 2,
  webServer: undefined,
};

export default config;
