import { expect, test } from "@playwright/test";

test("Endpoint json()", async ({ page }) => {
  const rsp = (await page.goto("/app/endpoints/data.json"))!;
  expect(rsp.status()).toBe(200);
  expect(rsp.headers()["content-type"]).toBe("application/json; charset=utf-8");

  const data = await rsp.json();
  expect(data.method).toBe("GET");
});

test("Endpoint text()", async ({ page }) => {
  const rsp = (await page.goto("/app/endpoints/data.txt"))!;
  expect(rsp.status()).toBe(202);
  expect(rsp.headers()["content-type"]).toBe("text/plain; charset=utf-8");

  const data = await rsp.text();
  expect(data).toBe("text GET");
});

test("Endpoint html()", async ({ page }) => {
  const rsp = (await page.goto("/app/endpoints/data.html"))!;
  expect(rsp.status()).toBe(201);
  expect(rsp.headers()["content-type"]).toBe("text/html; charset=utf-8");

  const data = await rsp.text();
  expect(data).toBe("html GET");
});

test("Endpoint getWritableStream()", async ({ page }) => {
  const rsp = (await page.goto("/app/endpoints/stream.txt"))!;
  expect(rsp.status()).toBe(203);
  expect(rsp.headers()["content-type"]).toBe("text/plain; charset=utf-8");

  const data = await rsp.text();
  expect(data).toBe("stream012");
});

test("send(new Response())", async ({ page }) => {
  const rsp = (await page.goto("/app/endpoints/response.txt"))!;
  expect(rsp.headers()["content-type"]).toBe("text/plain; charset=utf-8");

  const data = await rsp.text();
  expect(data).toBe("responsetext GET");
});

test("Endpoint redirect()", async ({ page }) => {
  await page.goto("/app/endpoints/redirect?url=/app/");
  await expect(page.locator("h1")).toContainText("Homepage");
});

test("Endpoint <img>", async ({ page }) => {
  await page.goto("/app/endpoints/", { waitUntil: "networkidle" });
  const img = page.locator("img");
  await expect(img).toHaveJSProperty("naturalWidth", 256);
  await expect(img).toHaveJSProperty("naturalHeight", 79);
});
