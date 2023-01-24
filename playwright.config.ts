import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const app = process.env.APP === "mpa" ? "mpa" : "spa";
const javaScriptEnabled = app === "spa";

if (process.env.LOGGED !== "true") {
  process.env.LOGGED = "true";
  console.log(`app: ${app}, javaScriptEnabled: ${javaScriptEnabled}`);
}

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  workers: process.env.CI ? 1 : undefined,
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        javaScriptEnabled,
      },
    },
  ],
  metadata: {
    server: "dev",
  },
  webServer: {
    command: "npm run dev -- --port 3005",
    port: 3005,
  },
};

export default config;
