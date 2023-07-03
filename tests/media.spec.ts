import { expect, test } from "@playwright/test";

test("local image should be served correctly", async ({ page }) => {
  await page.goto("/app/media/");
  const image0 = page.locator("#image-png");
  await expect(image0).toHaveJSProperty("naturalWidth", 256);
  await expect(image0).toHaveJSProperty("naturalHeight", 256);

  const image1 = page.locator("#jsx-png");
  await expect(image1).toHaveJSProperty("naturalWidth", 1280);
  await expect(image1).toHaveJSProperty("naturalHeight", 1280);

  const image2 = page.locator("#image-svg");
  await expect(image2).toHaveJSProperty("naturalWidth", 300);
  await expect(image2).toHaveJSProperty("naturalHeight", 93);

  const image3 = page.locator("#jsx-svg");
  await expect(image3).toHaveAttribute("viewBox", "0 0 649 201");
});
