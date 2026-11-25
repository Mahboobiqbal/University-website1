import { test, expect } from "@playwright/test";

test("header search navigates to the search results page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Open search" }).first().click();

  const input = page.getByRole("searchbox", { name: "Search keywords" });
  await input.fill("physics");
  await input.press("Enter");

  await expect(page).toHaveURL(/\/search\?q=physics/);
  await expect(
    page.getByRole("heading", { name: "Search the University of Swat" })
  ).toBeVisible();
  await expect(page.getByText(/result(s)? for/)).toBeVisible();
});

test("submit button also performs a search", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Open search" }).first().click();
  await page.getByRole("searchbox", { name: "Search keywords" }).fill("library");
  await page.getByRole("button", { name: "Submit search" }).click();

  await expect(page).toHaveURL(/\/search\?q=library/);
});

test("complaint is included in search results", async ({ page }) => {
  await page.goto("/search?q=complaint");

  await expect(
    page.getByRole("link", { name: /Submit a Complaint/ })
  ).toHaveAttribute("href", "/complaints");
});
