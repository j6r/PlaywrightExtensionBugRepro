import test, {expect} from "@playwright/test";

test('Testing loading variables with Playwright extension 1.1.x', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page).toHaveURL('https://playwright.dev/');
})

