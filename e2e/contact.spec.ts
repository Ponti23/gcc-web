import { test, expect } from "@playwright/test";

test.describe("Contact page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("hero heading renders", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /visit & contact/i })).toBeVisible();
  });

  test("service times and address are visible", async ({ page }) => {
    // Service times and address appear in both the page body and the footer;
    // first() is enough to confirm they render.
    await expect(page.getByText("9:30 AM").first()).toBeVisible();
    await expect(page.getByText("7:30 PM").first()).toBeVisible();
    await expect(page.getByText(/58 Cyril Rd/i).first()).toBeVisible();
  });

  test("email link uses mailto and points to the correct address", async ({ page }) => {
    const emailLink = page.getByRole("link", { name: /send us an email/i });
    await emailLink.scrollIntoViewIfNeeded();
    await expect(emailLink).toBeVisible();
    const href = await emailLink.getAttribute("href");
    expect(href).toMatch(/^mailto:pontillasjosh23@gmail\.com/);
  });

  test("phone link uses tel:", async ({ page }) => {
    const phoneLink = page.locator('a[href^="tel:"]').first();
    await phoneLink.scrollIntoViewIfNeeded();
    await expect(phoneLink).toBeVisible();
  });

  test("Find Us link points to Google Maps", async ({ page }) => {
    const mapsLink = page.getByRole("link", { name: /find us/i });
    await mapsLink.scrollIntoViewIfNeeded();
    const href = await mapsLink.getAttribute("href");
    expect(href).toContain("google.com/maps");
  });
});
