import { test, expect } from "@playwright/test";

const pastors = [
  { name: "Rev. Dr Dawson Elliott", photo: "/Ps_Dawson.PNG" },
  { name: "Ps Anand Darshan", photo: null },
  { name: "Ps Alex Cabanlit", photo: "/Ps_Alex.PNG" },
  { name: "Ps Diony Escarilla", photo: "/Ps_Diony.PNG" },
  { name: "Ps Gilbert Balbido", photo: "/Ps_Gilbert.PNG" },
];

test.describe("Leadership page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/leadership");
  });

  test("hero heading renders", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Leadership" })).toBeVisible();
  });

  test("all 5 pastor names are present as headings", async ({ page }) => {
    for (const pastor of pastors) {
      const heading = page.getByRole("heading", { name: pastor.name });
      await heading.scrollIntoViewIfNeeded();
      await expect(heading).toBeVisible();
    }
  });

  for (const pastor of pastors.filter((p) => p.photo)) {
    test(`${pastor.name} photo loads without 404`, async ({ page }) => {
      const img = page.locator(`img[src="${pastor.photo}"]`);
      await img.scrollIntoViewIfNeeded();
      await expect(img).toBeVisible();
      const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
      expect(naturalWidth).toBeGreaterThan(0);
    });
  }

  test("Ps Anand shows initials fallback (no photo)", async ({ page }) => {
    // Scroll Ps Anand's section into view to trigger reveal animation
    const anandHeading = page.getByRole("heading", { name: "Ps Anand Darshan" });
    await anandHeading.scrollIntoViewIfNeeded();
    // The initials "AD" appear in the fallback avatar div
    const initialsEl = page.locator("div.font-display.text-primary").filter({ hasText: "AD" }).first();
    await initialsEl.scrollIntoViewIfNeeded();
    await expect(initialsEl).toBeVisible();
  });

  test("footer renders", async ({ page }) => {
    await page.locator("footer").scrollIntoViewIfNeeded();
    await expect(page.locator("footer")).toBeVisible();
  });
});
