import { expect, test } from "@playwright/test";

test("static", async ({ page }) => {
  const rsp = (await page.goto("/static/"))!;
  expect(rsp.status()).toBe(200);

  await expect(page.locator("h1")).toContainText("Static");
});
