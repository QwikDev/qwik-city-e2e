import { expect, test } from "@playwright/test";

test("sign-in", async ({ page }) => {
  const rsp = (await page.goto("/sign-in"))!;
  expect(rsp.status()).toBe(200);

  expect(page.locator("h1")).toContainText("Sign In");
  expect(page.locator("form[data-test='sign-in']")).toHaveCount(1);

  const username = page.locator("input[name='sign-in-username']");
  await username.type("invalid-username");

  const password = page.locator("input[name='sign-in-password']");
  await password.type("idk");

  const submit = page.locator("button[data-test='sign-in']");

  const [invalidSubmit] = await Promise.all([
    page.waitForNavigation(),
    submit.click(),
  ]);
  expect(invalidSubmit!.status()).toBe(403);

  await username.type("qwik");
  await password.type("dev");

  const [validSubmit] = await Promise.all([
    page.waitForNavigation(),
    submit.click(),
  ]);
  expect(validSubmit!.status()).toBe(301);
  expect(validSubmit!.headers()["location"]).toBe("/dashboard/");

  const [rspSignedInRedirect] = await Promise.all([
    page.waitForNavigation(),
    page.goto("/sign-in/"),
  ]);
  expect(rspSignedInRedirect!.status()).toBe(301);
  expect(rspSignedInRedirect!.headers()["location"]).toBe("/dashboard/");

  const [rspSignedIn] = await Promise.all([
    page.waitForNavigation(),
    page.goto("/dashboard/"),
  ]);
  expect(rspSignedIn!.status()).toBe(200);
  expect(page.locator("h1")).toContainText("Dashboard");

  const [rspSignOut] = await Promise.all([
    page.waitForNavigation(),
    page.goto("/sign-out/"),
  ]);
  expect(rspSignOut!.status()).toBe(301);
  expect(rspSignOut!.headers()["location"]).toBe("/");
});
