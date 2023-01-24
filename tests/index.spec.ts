import { expect, test } from "@playwright/test";

test("index", async ({ page }) => {
  const rsp = (await page.goto("/"))!;
  expect(rsp.status()).toBe(200);

  const headers = rsp.headers();
  expect(headers["content-type"]).toContain("text/html");
  expect(headers["x-robots-tag"]).toContain("noindex");
  expect(headers["x-robots-tag"]).toContain("nofollow");

  await expect(page.locator("h1")).toContainText("Homepage");
  await expect(page.locator("footer")).toHaveCount(1);
});

test("index q-data.json", async ({ page }) => {
  const rsp = (await page.goto("/q-data.json"))!;
  expect(rsp.status()).toBe(200);

  const json = await rsp.json();
  expect(json.isStatic).toBeFalsy();
});
