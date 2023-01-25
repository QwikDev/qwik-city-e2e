import { expect, test } from "@playwright/test";

test("qwik react", async ({ page }) => {
  const rsp = (await page.goto("/react/"))!;
  expect(rsp.status()).toBe(200);

  await expect(page.locator("h1")).toContainText("Qwik React");
});
