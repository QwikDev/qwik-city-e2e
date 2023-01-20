import { expect, test } from "@playwright/test";

test("static", async ({ page }) => {
  const rsp = (await page.goto("/static/"))!;
  expect(rsp.status()).toBe(200);

  await expect(page.locator("html")).toHaveAttribute("q:render", "static-ssr");
  await expect(page.locator("h1")).toContainText("Static");
});

test("static index.html", async ({ page }) => {
  const rsp = (await page.goto("/static/index.html"))!;
  expect(rsp.status()).toBe(200);

  await expect(page.locator("html")).toHaveAttribute("q:render", "static-ssr");
  await expect(page.locator("h1")).toContainText("Static");
});

test("static q-data.json", async ({ page }) => {
  const rsp = (await page.goto("/static/q-data.json"))!;
  expect(rsp.status()).toBe(200);

  const json = await rsp.json();
  expect(json.isStatic).toBe(true);
});

test("public static asset, favicon.svg", async ({ page }) => {
  const rsp = (await page.goto("/favicon.svg"))!;
  expect(rsp.status()).toBe(200);
});
