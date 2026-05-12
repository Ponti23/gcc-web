import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("hero heading and CTA buttons are visible", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /a place to belong, believe & become/i })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: /plan your visit/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /watch sermons/i })).toBeVisible();
  });

  test("hero background image loads", async ({ page }) => {
    const img = page.locator('img[alt*="Grace Community Church"]').first();
    await expect(img).toBeVisible();
    const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  });

  test("about section is present", async ({ page }) => {
    await page.locator("#about").scrollIntoViewIfNeeded();
    await expect(page.locator("#about")).toBeVisible();
  });

  test("services section shows service times and location", async ({ page }) => {
    const services = page.locator("#services");
    await services.scrollIntoViewIfNeeded();
    await expect(services.getByText("9:30 AM")).toBeVisible();
    await expect(services.getByText("7:30 PM")).toBeVisible();
    await expect(services.getByText(/58 Cyril Rd/i)).toBeVisible();
  });

  test("pastor message shows Ps Dawson photo loaded", async ({ page }) => {
    const img = page.locator('img[alt="Rev. Dr Dawson Elliott"]').first();
    await img.scrollIntoViewIfNeeded();
    await expect(img).toBeVisible();
    const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  });

  test("sermons section renders sermon cards", async ({ page }) => {
    await page.locator("#sermons").scrollIntoViewIfNeeded();
    await expect(page.getByText("Finding Peace in the Storm")).toBeVisible();
    await expect(page.getByText("The Power of Forgiveness")).toBeVisible();
  });

  test("footer contact info is visible", async ({ page }) => {
    const footer = page.locator("footer");
    await footer.scrollIntoViewIfNeeded();
    await expect(footer.getByText(/58 Cyril Rd/i)).toBeVisible();
    await expect(footer.getByText(/Sunday Worship/i)).toBeVisible();
  });
});
