import { expect, test } from "@playwright/test";

test("index", async ({ page }, { config }) => {
  await page.goto("/env/");

  if (config.metadata.server === "vercel") {
    // TODO: figure out why our Vercel build does not work with process.env
    return;
  }

  await expect(page.locator("#env-value-platform")).toHaveText(
    config.metadata.server
  );
  if (config.metadata.server === "dev") {
    await expect(page.locator("#env-value-importMetaEnv")).toHaveText(
      "foo dev"
    );
    await expect(page.locator("#importmeta-env-VITE_HELLO_WORLD")).toHaveText(
      "foo dev"
    );
  } else {
    await expect(page.locator("#env-value-importMetaEnv")).toHaveText(
      "foo prod"
    );
    await expect(page.locator("#importmeta-env-VITE_HELLO_WORLD")).toHaveText(
      "foo prod"
    );
  }
});
