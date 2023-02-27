import { expect, test } from "@playwright/test";

test("qwik react", async ({ page }) => {
  const rsp = (await page.goto("/app/react/"))!;
  expect(rsp.status()).toBe(200);

  await expect(page.locator("h1")).toContainText("Qwik React");
  await expect(page.locator(".finished-qwik")).toHaveText("Everything rendered");
});
