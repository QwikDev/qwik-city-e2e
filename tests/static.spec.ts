import { expect, test } from "@playwright/test";

test("static", async ({ page }, { config }) => {
  const rsp = (await page.goto("/static/"))!;
  expect(rsp.status()).toBe(200);

  await expect(page.locator("h1")).toContainText("Static");

  if (config.metadata.server === "dev") {
    await expect(page.locator("html")).toHaveAttribute("q:render", "ssr-dev");
  } else if (config.metadata.server === "preview") {
    await expect(page.locator("html")).toHaveAttribute("q:render", "ssr");
  } else {
    await expect(page.locator("html")).toHaveAttribute(
      "q:render",
      "static-ssr"
    );
  }
});

test("static q-data.json", async ({ page }, { config }) => {
  if (
    config.metadata.server !== "dev" &&
    config.metadata.server !== "preview"
  ) {
    const rsp = (await page.goto("/static/q-data.json"))!;
    expect(rsp.status()).toBe(200);
  }
});

test("public static asset, favicon.ico", async ({ page }) => {
  const rsp = (await page.goto("/favicon.ico"))!;
  expect(rsp.status()).toBe(200);
});

test.skip("Static endpoint rss.xml feed", async ({ page }) => {
  const rsp = (await page.goto("/static/rss.xml"))!;
  expect(rsp.status()).toBe(200);
  expect(rsp.headers()["content-type"]).toBe("text/xml");

  const data = await rsp.text();
  expect(data).toContain(`<rss version="2.0">`);
});
