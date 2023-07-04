import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "static",
  },

  webServer: {
    command: "pnpm run serve.static",
    port: 3003,
  },
};

export default config;
