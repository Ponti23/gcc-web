import { test, expect } from "@playwright/test";

test.describe("Resources page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/resources");
  });

  test("hero heading renders", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Resources" })).toBeVisible();
  });

  test("all four filter buttons are visible", async ({ page }) => {
    await expect(page.getByRole("button", { name: "All" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Sermons" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Articles" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Pastor Messages" })).toBeVisible();
  });

  test('"All" filter shows 8 resource cards by default', async ({ page }) => {
    const cards = page.locator(".group.rounded-xl");
    await expect(cards).toHaveCount(8);
  });

  test('"Sermons" filter shows only sermon content', async ({ page }) => {
    await page.getByRole("button", { name: "Sermons" }).click();
    await expect(page.getByText("Finding Peace in the Storm")).toBeVisible();
    await expect(page.getByText("The Power of Forgiveness")).toBeVisible();
    await expect(page.getByText("Why the Local Church Still Matters")).not.toBeVisible();
  });

  test('"Articles" filter shows only article content', async ({ page }) => {
    await page.getByRole("button", { name: "Articles" }).click();
    await expect(page.getByText("Why the Local Church Still Matters")).toBeVisible();
    await expect(page.getByText("Finding Peace in the Storm")).not.toBeVisible();
  });

  test('"Pastor Messages" filter shows message cards', async ({ page }) => {
    await page.getByRole("button", { name: "Pastor Messages" }).click();
    await expect(page.getByText("A Word to the Weary")).toBeVisible();
    await expect(page.getByText("Easter Is Coming — And So Is He")).toBeVisible();
    await expect(page.getByText("Finding Peace in the Storm")).not.toBeVisible();
  });

  test("switching back to All restores all content", async ({ page }) => {
    await page.getByRole("button", { name: "Sermons" }).click();
    await page.getByRole("button", { name: "All" }).click();
    await expect(page.getByText("Why the Local Church Still Matters")).toBeVisible();
    await expect(page.getByText("Finding Peace in the Storm")).toBeVisible();
  });

  test('"Load More Resources" button is present', async ({ page }) => {
    await page.getByRole("button", { name: /load more/i }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("button", { name: /load more/i })).toBeVisible();
  });
});
