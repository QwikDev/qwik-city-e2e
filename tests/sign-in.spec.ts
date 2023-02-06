import { expect, test } from "@playwright/test";
import { appNavigationClick } from "./utils";

test("sign-in", async ({ page }) => {
  const rsp = (await page.goto("/sign-in/"))!;
  expect(rsp.status()).toBe(200);

  await expect(page.locator("h1")).toContainText("Sign In");

  const signInForm = page.locator(`form[data-test="sign-in"]`);
  await expect(signInForm).toHaveCount(1);

  const username = signInForm.locator(`input[name="username"]`);
  await username.type("invalid-username");

  const password = signInForm.locator(`input[name="password"]`);
  await password.type("idk");

  const loginSubmit = signInForm.locator(`button[type="submit"]`);

  // invalid sign-in
  const invalidSubmit = await appNavigationClick({
    page,
    clickElm: loginSubmit,
    waitForPathResponse: "/sign-in/",
  });
  expect(invalidSubmit.status).toBe(403);
  expect(invalidSubmit.method).toBe("POST");

  // valid sign-in
  await username.fill("");
  await username.type("qwik");

  await password.fill("");
  await password.type("dev");

  // go to dashboard
  await appNavigationClick({
    page,
    clickElm: loginSubmit,
    waitForPathResponse: "/dashboard/",
  });
  await expect(page.locator("h1")).toContainText("Dashboard");

  await expect(page.locator("[data-test-user-id]")).toHaveText("qwik");

  // go to sign-in, while signed-in, and should redirect back to dashboard
  await Promise.all([page.waitForNavigation(), page.goto("/sign-in/")]);
  await expect(page.locator("h1")).toContainText("Dashboard");

  // sign-out
  await Promise.all([page.waitForNavigation(), page.goto("/sign-out/")]);
  await expect(page.locator("h1")).toContainText("Homepage");

  // try to go to dashboard, while signed-out, and should redirect to sign-in
  await Promise.all([page.waitForNavigation(), page.goto("/dashboard/")]);
});
