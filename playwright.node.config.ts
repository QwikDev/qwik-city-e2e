import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "node",
  },

  webServer: {
    command: "npm run serve.node",
    port: 3004,
  },
};

export default config;
