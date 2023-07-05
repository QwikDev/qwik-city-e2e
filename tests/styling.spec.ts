import { expect, test } from "@playwright/test";

test.describe("navigate to /app/styling/ from root", async () => {
  test.beforeEach(async ({page}) => {
    await page.goto("/app/");
    await page.click("text=Styling");
  });

  tests();
});

test.describe("navigate directly to /app/styling/", async () => {
  test.beforeEach(async ({page}) => {
    await page.goto("/app/styling/");
  });

  tests();
});

function tests() {
  test('pandacss', async ({page}) => {
    const panda = page.locator('#panda-css-1');
    await expect(panda).toHaveCSS('padding', '40px');
    await expect(panda).toHaveCSS('background-color', 'rgb(248, 113, 113)');
  })
}
