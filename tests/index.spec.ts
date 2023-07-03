import { expect, test } from "@playwright/test";

test("index", async ({ page }) => {
  const rsp = (await page.goto("/app/"))!;
  expect(rsp.status()).toBe(200);

  const headers = rsp.headers();
  expect(headers["content-type"]).toContain("text/html");
  expect(headers["x-robots-tag"]).toContain("noindex");
  expect(headers["x-robots-tag"]).toContain("nofollow");

  await expect(page.locator("h1")).toContainText("Homepage");
  await expect(page.locator("footer")).toHaveCount(1);
});

test("black-box should be black", async ({ page }) => {
  await page.goto("/app/");
  const blackBox = page.locator(".black-box");
  await expect(blackBox).toHaveCSS("background-color", "rgb(0, 0, 0)");
});

test("server origin should match origin", async ({ page }) => {
  await page.goto("/app/");
  const origin = page.locator("#server-origin");
  const url = new URL(await page.url());
  await expect(origin).toHaveText(`Origin: ${url.origin}`);
});
