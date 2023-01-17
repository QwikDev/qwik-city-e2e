import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  use: {
    baseURL: "https://qwik-city-e2e.netlify.app/",
  },

  webServer: undefined,
};

export default config;
