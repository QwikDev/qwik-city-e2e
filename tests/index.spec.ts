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
  const blackBox = page.locator('.black-box');
  await expect(blackBox).toHaveCSS('background-color', 'rgb(0, 0, 0)');
});

test("local image should be served correctly", async ({ page }) => {
  await page.goto("/app/");
  const image = page.locator('#image');
  await expect(image).toHaveProperty('width', 256);
  await expect(image).toHaveProperty('height', 256);
});
