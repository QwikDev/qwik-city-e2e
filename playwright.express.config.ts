import type { PlaywrightTestConfig } from "@playwright/test";
import sharedConfig from "./playwright.shared.config";

const config: PlaywrightTestConfig = {
  ...sharedConfig,

  webServer: {
    command: "npm run serve.express",
    port: 3000,
  },
};

export default config;
