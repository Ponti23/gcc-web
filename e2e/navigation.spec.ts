import { test, expect } from "@playwright/test";

test.describe("Desktop navigation", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("logo is visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Grace Community Church" })).toBeVisible();
  });

  test("navigates to /about", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "About" }).first().click();
    await expect(page).toHaveURL("/about");
    await expect(page.getByRole("heading", { name: /our story/i })).toBeVisible();
  });

  test("navigates to /leadership", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Leadership" }).first().click();
    await expect(page).toHaveURL("/leadership");
    await expect(page.getByRole("heading", { name: "Leadership" })).toBeVisible();
  });

  test("navigates to /resources", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Resources" }).first().click();
    await expect(page).toHaveURL("/resources");
    await expect(page.getByRole("heading", { name: "Resources" })).toBeVisible();
  });

  test("Events anchor link points to /#events", async ({ page }) => {
    await page.goto("/");
    // Scope to navbar to avoid matching the footer's Events link
    const eventsLink = page.getByRole("navigation").getByRole("link", { name: "Events" });
    const href = await eventsLink.getAttribute("href");
    expect(href).toMatch(/#events/);
  });

  test("Contact anchor link points to /#contact", async ({ page }) => {
    await page.goto("/");
    const contactLink = page.getByRole("navigation").getByRole("link", { name: "Contact" });
    const href = await contactLink.getAttribute("href");
    expect(href).toMatch(/#contact/);
  });

  test('"Visit Us" navigates to /about', async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Visit Us" }).first().click();
    await expect(page).toHaveURL("/about");
  });
});

test.describe("Mobile hamburger menu", () => {
  test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

  test("hamburger button is visible on mobile", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("button", { name: /toggle menu/i })).toBeVisible();
  });

  test("tapping hamburger opens mobile menu with nav links", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /toggle menu/i }).tap();
    // Wait for menu to render and links to be visible
    await expect(page.getByRole("link", { name: "Leadership" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Resources" }).first()).toBeVisible();
  });

  test("tapping a mobile menu link navigates correctly", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /toggle menu/i }).tap();
    await page.getByRole("link", { name: "Leadership" }).first().tap();
    await expect(page).toHaveURL("/leadership");
    await expect(page.getByRole("heading", { name: "Leadership" })).toBeVisible();
  });

  test("tapping hamburger twice closes the menu", async ({ page }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: /toggle menu/i });
    await toggle.tap();
    await expect(page.getByRole("link", { name: "Resources" }).first()).toBeVisible();
    await toggle.tap();
    // After close, Resources link in the mobile menu should be gone
    await page.waitForTimeout(300);
    const mobileMenuLinks = page.locator('[class*="md:hidden"] a[href="/resources"]');
    await expect(mobileMenuLinks).not.toBeVisible();
  });
});

test.describe("404 page", () => {
  test("unknown route shows 404 page", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");
    await expect(page.getByRole("heading", { name: "404" })).toBeVisible();
    await expect(page.getByText(/page not found/i)).toBeVisible();
  });

  test('"Return to Home" link navigates to /', async ({ page }) => {
    await page.goto("/not-real");
    await page.getByRole("link", { name: /return to home/i }).click();
    await expect(page).toHaveURL("/");
  });
});
