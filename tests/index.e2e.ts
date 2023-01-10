import { expect, test } from "@playwright/test";

test("index", async ({ page }) => {
  const rsp = (await page.goto("/"))!;
  expect(rsp.status()).toBe(200);
  expect(rsp.headers()["content-type"]).toContain("text/html");
  expect(rsp.headers()["X-Robots-Tag"]).toContain("noindex");
  expect(rsp.headers()["X-Robots-Tag"]).toContain("nofollow");

  expect(page.locator("h1")).toContainText("Homepage");
  expect(page.locator("ul[data-test='menu']")).toHaveCount(1);
  expect(page.locator("footer")).toHaveCount(1);
});
