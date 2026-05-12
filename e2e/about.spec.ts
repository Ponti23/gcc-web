import { test, expect } from "@playwright/test";

test.describe("About page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/about");
  });

  test("hero heading renders", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /our story/i })).toBeVisible();
  });

  test("Who We Are content is present", async ({ page }) => {
    await expect(page.getByText(/Grace Community Church was planted/i)).toBeVisible();
  });

  test("stats show 13 years and 7+ nations", async ({ page }) => {
    // Use exact match to avoid matching "13 years" in paragraph text
    await expect(page.getByText("13", { exact: true })).toBeVisible();
    await expect(page.getByText("Years of Ministry")).toBeVisible();
    await expect(page.getByText("7+", { exact: true })).toBeVisible();
    await expect(page.getByText("Nations Represented")).toBeVisible();
  });

  test("all 6 core belief cards render", async ({ page }) => {
    const beliefTitles = [
      "The Bible",
      "God",
      "Jesus Christ",
      "Salvation",
      "The Church",
      "Eternal Life",
    ];
    for (const title of beliefTitles) {
      await page.getByText(title).first().scrollIntoViewIfNeeded();
      await expect(page.getByText(title).first()).toBeVisible();
    }
  });

  test("Statement of Faith section is present", async ({ page }) => {
    const heading = page.getByText(/australian evangelical alliance/i).first();
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeVisible();
  });

  test("footer renders", async ({ page }) => {
    await page.locator("footer").scrollIntoViewIfNeeded();
    await expect(page.locator("footer")).toBeVisible();
  });
});
