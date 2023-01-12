import { expect, test } from "@playwright/test";

test("Endpoint json() response", async ({ page: api }) => {
  const rsp = (await api.goto("/api/data.json"))!;
  expect(rsp.status()).toBe(200);
  expect(rsp.headers()["content-type"]).toBe("application/json; charset=utf-8");

  const data = await rsp.json();
  expect(data.method).toBe("GET");
});

test("html() response", async ({ page: api }) => {
  const rsp = (await api.goto("/api/data.json?format=html"))!;
  expect(rsp.status()).toBe(201);
  expect(rsp.headers()["content-type"]).toBe("text/html; charset=utf-8");

  const data = await rsp.text();
  expect(data).toBe("html GET");
});

test("text() response", async ({ page: api }) => {
  const rsp = (await api.goto("/api/data.json?format=text"))!;
  expect(rsp.status()).toBe(202);
  expect(rsp.headers()["content-type"]).toBe("text/plain; charset=utf-8");

  const data = await rsp.text();
  expect(data).toBe("text GET");
});

test("getWritableStream() response", async ({ page: api }) => {
  const rsp = (await api.goto("/api/data.json?format=csv"))!;
  expect(rsp.status()).toBe(203);
  expect(rsp.headers()["content-type"]).toBe("text/plain; charset=utf-8");

  const data = await rsp.text();
  expect(data).toBe("stream012");
});

test("send(new Response())", async ({ page: api }) => {
  const rsp = (await api.goto("/api/data.json?format=response"))!;
  expect(rsp.status()).toBe(201);
  expect(rsp.headers()["content-type"]).toBe("text/plain; charset=utf-8");

  const data = await rsp.text();
  expect(data).toBe("responsebody");
});
