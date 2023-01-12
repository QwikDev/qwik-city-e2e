import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  webServer: {
    command: "npm run serve.express",
    port: 3002,
  },
};

export default config;
