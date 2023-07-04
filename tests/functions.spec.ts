import { expect, Page, test } from "@playwright/test";

test("navigate to /app/functions/ from root and run test", async ({
  page,
  javaScriptEnabled,
}) => {
  await page.goto("/app/");
  if (javaScriptEnabled) {
    await page.click("text=Functions");
    await functionsTest(page);
  }
});

test("navigate to /app/functions/ and run test", async ({
  page,
  javaScriptEnabled,
}) => {
  await page.goto("/app/functions/");
  if (javaScriptEnabled) {
    await functionsTest(page);
  }
});

test("streaming @streaming", async ({ page, javaScriptEnabled }) => {
  await page.goto("/app/functions/");
  if (javaScriptEnabled) {
    const logs = page.locator(".server-streaming");
    const button = page.locator("#server-streaming-button");

    await expect(logs).toHaveText("");
    await button.click();
    await page.waitForTimeout(900);
    await expect(logs).toHaveText("0");
    await page.waitForTimeout(900);
    await expect(logs).toHaveText("01");
    await page.waitForTimeout(900);
    await expect(logs).toHaveText("012");
    await page.waitForTimeout(900);
    await expect(logs).toHaveText("0123");
    await page.waitForTimeout(900);
    await expect(logs).toHaveText("01234");
  }
});

async function functionsTest(page: Page) {
  const increment = page.locator("#increment");

  await expect(increment).toHaveText("Increment 0 0");

  await increment.click();
  await expect(increment).toHaveText("Increment 1 2");

  await increment.click();
  await expect(increment).toHaveText("Increment 2 4");
  await increment.click();
  await expect(increment).toHaveText("Increment 3 6");
}
