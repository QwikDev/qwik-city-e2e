import { expect, test } from "@playwright/test";

test("navigate to /static/", async ({ page }, { config }) => {
  await page.goto("/");
  const link = page.locator("a[href='/static/']");
  await link.click();
  await expect(page.locator("h1")).toContainText("Static");
  await expect(new URL(page.url()).pathname).toEqual("/static/");
});

test("navigate to /endpoints/", async ({ page }, { config }) => {
  await page.goto("/");
  const link = page.locator("a[href='/endpoints/']");
  await link.click();
  await expect(page.locator("h1")).toContainText("Endpoints");
  await expect(new URL(page.url()).pathname).toEqual("/endpoints/");
});

test("navigate to /endpoints (no trailing)", async ({ page }, { config }) => {
  await page.goto("/");
  const link = page.locator("a[href='/endpoints']");
  await link.click();
  await expect(page.locator("h1")).toContainText("Endpoints");
  await expect(new URL(page.url()).pathname).toEqual("/endpoints/");
});

test("navigate to /react/", async ({ page }, { config }) => {
  await page.goto("/");
  const link = page.locator("a[href='/react/']");
  await link.click();
  await expect(page.locator("h1")).toContainText("React");
  await expect(new URL(page.url()).pathname).toEqual("/react/");
});

test("navigate to root 404 /idk/", async ({ page }, { config }) => {
  await page.goto("/");
  const link = page.locator("a[href='/idk/']");
  await link.click();
  await expect(page.locator("h1")).toContainText("Root Directory 404");
  await expect(new URL(page.url()).pathname).toEqual("/idk/");
});


test("navigate to static 404 /static/idk/", async ({ page }, { config }) => {
  await page.goto("/");
  const link = page.locator("a[href='/static/idk/']");
  await link.click();
  await expect(page.locator("h1")).toContainText("Static Directory 404");
  await expect(new URL(page.url()).pathname).toEqual("/static/idk/");
});