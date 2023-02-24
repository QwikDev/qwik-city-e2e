import { expect, test } from "@playwright/test";

test("custom route entry", async ({ page }, { config }) => {
  if (config.metadata.server === "dev") {
    return;
  }

  const rsp = (await page.goto("/app/entry.js"))!;
  expect(rsp.status()).toBe(200);
  expect(rsp.headers()["content-type"]).toContain("javascript");
  expect(await rsp.text()).toContain("entry.js");
});

test("service-worker.js", async ({ page }, { config }) => {
  if (config.metadata.server === "dev") {
    return;
  }

  const rsp = (await page.goto("/app/service-worker.js"))!;
  expect(rsp.status()).toBe(200);
  expect(rsp.headers()["content-type"]).toContain("javascript");
  expect(await rsp.text()).toContain("QwikBuild");
});
