import { expect, test } from "@playwright/test";

test("custom 404", async ({ page }) => {
  const rsp = (await page.goto("/static/idk/"))!;
  expect(rsp.status()).toBe(404);

  await expect(page.locator("h1")).toContainText("Custom 404");
});
