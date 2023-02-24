import { expect, test } from "@playwright/test";

test("catchall", async ({ page }) => {
  const rsp = (await page.goto("/app/catchall/"))!;
  expect(rsp.status()).toBe(200);

  await expect(page.locator("h1")).toContainText("Catchall");
});
