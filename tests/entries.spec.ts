import { expect, test } from "@playwright/test";

test("custom route entry", async ({ page }) => {
  const rsp = (await page.goto("/entry.js"))!;
  expect(rsp.status()).toBe(200);
  expect(rsp.headers()["content-type"]).toContain("application/javascript");
  expect(await rsp.text()).toContain("entry.js");
});

test("service-worker.js", async ({ page }) => {
  const rsp = (await page.goto("/service-worker.js"))!;
  expect(rsp.status()).toBe(200);
  expect(rsp.headers()["content-type"]).toContain("application/javascript");
  expect(await rsp.text()).toContain("QwikBuild");
});
