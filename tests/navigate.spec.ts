import { expect, test } from "@playwright/test";

test("navigate to /app/static/", async ({ page }, { config }) => {
  await page.goto("/app/");
  const link = page.locator("a[href='/app/static/']");
  await link.click();
  await expect(page.locator("h1")).toContainText("Static");
  await expect(new URL(page.url()).pathname).toEqual("/app/static/");
});

test("navigate to /app/endpoints/", async ({ page }, { config }) => {
  await page.goto("/app/");
  const link = page.locator("a[href='/app/endpoints/']");
  await link.click();
  await expect(page.locator("h1")).toContainText("Endpoints");
  await expect(new URL(page.url()).pathname).toEqual("/app/endpoints/");
});

test("navigate to /app/endpoints (no trailing)", async ({ page }, {
  config,
}) => {
  await page.goto("/app/");
  const link = page.locator("a[href='/app/endpoints']");
  await link.click();
  await expect(page.locator("h1")).toContainText("Endpoints");
  await expect(new URL(page.url()).pathname).toEqual("/app/endpoints/");
});

test("navigate to /app/react/", async ({ page }, { config }) => {
  await page.goto("/app/");
  const link = page.locator("a[href='/app/react/']");
  await link.click();
  await expect(page.locator("h1")).toContainText("React");
  await expect(new URL(page.url()).pathname).toEqual("/app/react/");
});

test("navigate to root 404 /app/idk/", async ({ page }, { config }) => {
  await page.goto("/app/");
  const link = page.locator("a[href='/app/idk/']");
  await link.click();
  if (
    config.metadata.server !== "dev" &&
    config.metadata.server !== "preview"
  ) {
    await expect(page.locator("h1")).toContainText("Root Directory 404");
    await expect(new URL(page.url()).pathname).toEqual("/app/idk/");
  }
});

test("navigate to static 404 /app/static/idk/", async ({ page }, {
  config,
}) => {
  await page.goto("/app/");
  const link = page.locator("a[href='/app/static/idk/']");
  await link.click();
  if (
    config.metadata.server !== "dev" &&
    config.metadata.server !== "preview"
  ) {
    await expect(page.locator("h1")).toContainText("Static Directory 404");
    await expect(new URL(page.url()).pathname).toEqual("/app/static/idk/");
  }
});
