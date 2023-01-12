import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  workers: process.env.CI ? 1 : undefined,
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        javaScriptEnabled: false,
      },
    },
  ],
  webServer: {
    command: "npm run dev",
    port: 3000,
  },
};

export default config;
