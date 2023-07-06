import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "node",
    dev: true,
  },

  webServer: {
    command: "pnpm run serve.node",
    port: 3004,
  },
};

export default config;
