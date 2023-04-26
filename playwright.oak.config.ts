import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "deno",
  },

  webServer: {
    command: "npm run serve.deno",
    port: 3009,
  },
};

export default config;
