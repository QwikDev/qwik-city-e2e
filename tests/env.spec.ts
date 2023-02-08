import { expect, test } from "@playwright/test";

test("index", async ({ page }, {config}) => {
  await page.goto("/env/");

  await expect(page.locator('#env-value-platform')).toHaveText(config.metadata.server);
  await expect(page.locator('#env-value-importMetaEnv')).toHaveText('foo prod');
  await expect(page.locator('#importmeta-env-VITE_HELLO_WORLD')).toHaveText('foo prod');
});
