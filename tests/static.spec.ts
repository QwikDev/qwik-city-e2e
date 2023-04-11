import { expect, test } from "@playwright/test";

test("static", async ({ page }, { config }) => {
  const rsp = (await page.goto("/app/static/"))!;
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

test("static onStaticGenerate", async ({ page }, { config }) => {
  if (
    config.metadata.server === "dev" ||
    config.metadata.server === "preview"
  ) {
    return;
  }
  let rsp = (await page.goto("/static/docs/getting-started/"))!;
  expect(rsp.status()).toBe(200);
  await expect(page.locator("h1")).toContainText(
    "/static/docs/getting-started/"
  );

  rsp = (await page.goto("/static/docs//pages/file-structure/"))!;
  expect(rsp.status()).toBe(200);
  await expect(page.locator("h1")).toContainText(
    "/static/docs/pages/file-structure/"
  );
});

test("static q-data.json", async ({ page }, { config }) => {
  if (
    config.metadata.server !== "dev" &&
    config.metadata.server !== "preview"
  ) {
    const rsp = (await page.goto("/app/static/q-data.json"))!;
    expect(rsp.status()).toBe(200);
  }
});

test("public static asset, favicon.ico", async ({ page }) => {
  const rsp = (await page.goto("/app/favicon.ico"))!;
  expect(rsp.status()).toBe(200);
});

test("Static endpoint rss.xml feed", async ({ page }) => {
  const rsp = (await page.goto("/app/static/rss.xml"))!;
  expect(rsp.status()).toBe(200);

  const data = await rsp.text();
  expect(data).toContain(`<rss version="2.0">`);
});

test("Static endpoint /list/ as html response", async ({ page }, {
  config,
}) => {
  const rsp = (await page.goto("/app/static/html-endpoint/"))!;
  expect(rsp.status()).toBe(200);
  expect(rsp.headers()["content-type"]).toContain(`text/html`);
  expect(await rsp.text()).toContain(`html-endpoint`);

  if (config.metadata.server === "static") {
    const rsp2 = (await page.goto("/app/static/html-endpoint/index.html"))!;
    expect(rsp2.status()).toBe(200);
    expect(rsp2.headers()["content-type"]).toContain(`text/html`);
    expect(await rsp2.text()).toContain(`html-endpoint`);
  }
});

test("Endpoints as static files", async ({ page }, { config }) => {
  if (config.metadata.server !== "static") {
    // static server testing only
    return;
  }

  const rHtml = (await page.goto("/app/endpoints/data.html"))!;
  expect(rHtml.status()).toBe(200);
  expect(rHtml.headers()["content-type"]).toContain(`text/html`);
  expect(await rHtml.text()).toContain(`html GET`);

  const rJson = (await page.goto("/app/endpoints/data.json"))!;
  expect(rJson.status()).toBe(200);
  expect(rJson.headers()["content-type"]).toContain(`json`);
  const dJson = await rJson.json();
  expect(dJson.method).toBe(`GET`);

  const rTxt = (await page.goto("/app/endpoints/data.txt"))!;
  expect(rTxt.headers()["content-type"]).toContain(`text/plain`);
  expect(rTxt.status()).toBe(200);
  expect(await rTxt.text()).toContain(`text GET`);

  const rPng = (await page.goto("/app/endpoints/image.png"))!;
  expect(rPng.headers()["content-type"]).toContain(`image/png`);
  expect(rPng.status()).toBe(200);

  const rIndexHtml = (await page.goto("/app/endpoints/index.html"))!;
  expect(rIndexHtml.status()).toBe(200);
  expect(rIndexHtml.headers()["content-type"]).toContain(`text/html`);
  expect(await rIndexHtml.text()).toContain(`<h1>Endpoints</h1>`);

  const rSend = (await page.goto("/app/endpoints/response.txt"))!;
  expect(rSend.status()).toBe(200);
  expect(rSend.headers()["content-type"]).toContain(`text/plain`);
  expect(await rSend.text()).toContain(`responsetext GET`);

  const rCsv = (await page.goto("/app/endpoints/stream.txt"))!;
  expect(rCsv.status()).toBe(200);
  expect(rCsv.headers()["content-type"]).toContain(`text/plain`);
  expect(await rCsv.text()).toContain(`stream012`);
});

test("sitemap.xml", async ({ page }, { config }) => {
  if (
    config.metadata.server === "dev" ||
    config.metadata.server === "preview"
  ) {
    return;
  }
  const rsp = (await page.goto("/app/sitemap.xml"))!;
  expect(rsp.status()).toBe(200);
});

test("static origin", async ({ page }, { config }) => {
  await page.goto("/app/static/");

  if (config.metadata.server === "azure") {
    await expect(page.locator("[data-origin]")).toContainText(
      "blue-smoke-0a7cdfe10.2.azurestaticapps.net"
    );
    return;
  }

  if (config.metadata.server === "cloudflare") {
    await expect(page.locator("[data-origin]")).toContainText(
      "https://qwik-city-e2e.pages.dev"
    );
    return;
  }

  if (config.metadata.server === "express") {
    await expect(page.locator("[data-origin]")).toContainText(
      "https://express.qwik.dev"
    );
    return;
  }

  if (config.metadata.server === "netlify") {
    await expect(page.locator("[data-origin]")).toContainText(
      "https://qwik-city-e2e.netlify.app"
    );
    return;
  }

  if (config.metadata.server === "static") {
    await expect(page.locator("[data-origin]")).toContainText(
      "https://qwik-city-e2e.static.qwik.dev"
    );
    return;
  }

  if (config.metadata.server === "vercel") {
    await expect(page.locator("[data-origin]")).toContainText(
      "https://qwik-city-e2e.vercel.app"
    );
    return;
  }
});
