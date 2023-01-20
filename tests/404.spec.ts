import { expect, test } from "@playwright/test";

test("nested directory 404", async ({ page }) => {
  const rsp = (await page.goto("/static/idk/"))!;
  expect(rsp.status()).toBe(404);

  await expect(page.locator("h1")).toContainText("Static Directory 404");
});

test("root directory 404", async ({ page }) => {
  const rsp = (await page.goto("/idk/"))!;
  expect(rsp.status()).toBe(404);

  await expect(page.locator("h1")).toContainText("Root Directory 404");
});
