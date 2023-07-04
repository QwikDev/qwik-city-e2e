import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "preview",
  },

  webServer: {
    command: "pnpm run serve.preview",
    port: 3001,
  },
};

export default config;
