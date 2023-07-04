import type { PlaywrightTestConfig } from "@playwright/test";
import commonConfig from "./playwright.config";

const config: PlaywrightTestConfig = {
  ...commonConfig,

  metadata: {
    server: "deno",
  },

  webServer: {
    command: "pnpm run serve.deno",
    port: 3010,
  },
};

export default config;
