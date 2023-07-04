import { expect, test } from "@playwright/test";

test("no trailing slash should redirect to have a trailing slash @trailingSlash", async ({
  page,
}) => {
  const rsp = (await page.goto("/app/endpoints"))!;
  expect(rsp.status()).toBe(200);

  const url = new URL(rsp.url());
  expect(url.pathname).toBe("/app/endpoints/");

  await expect(page.locator("h1")).toContainText("Endpoints");
});
