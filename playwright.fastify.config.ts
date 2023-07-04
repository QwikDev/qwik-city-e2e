import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "fastify",
  },

  webServer: {
    command: "pnpm run serve.fastify",
    port: 3005,
  },
};

export default config;
