import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "fastify",
  },

  webServer: {
    command: "npm run serve.fastify",
    port: 3002,
  },
};

export default config;
