import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "express",
  },

  webServer: {
    command: "pnpm run serve.express",
    port: 3002,
  },
};

export default config;
