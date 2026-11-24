import { test, expect } from "@playwright/test";

test.describe("University AI Chatbot", () => {
  test("opens chatbot, sends a message, and receives structured response", async ({ page }) => {
    await page.goto("/");

    // Locate and click the launcher button
    const launcher = page.getByRole("button", { name: "Open University AI Assistant" });
    await expect(launcher).toBeVisible();
    await launcher.click();

    // Verify chat window opens
    const dialog = page.getByRole("dialog", { name: "University of Swat AI Assistant" });
    await expect(dialog).toBeVisible();

    // Check header branding
    await expect(page.getByRole("heading", { name: "University of Swat AI" })).toBeVisible();

    // Verify quick prompts bar is available
    const admissionsPrompt = page.getByRole("button", { name: "Fall Admissions" });
    await expect(admissionsPrompt).toBeVisible();

    // Click quick prompt
    await admissionsPrompt.click();

    // Expect response with admissions info and links
    await expect(page.getByRole("heading", { name: "University of Swat Admissions Guide" })).toBeVisible({
      timeout: 10_000,
    });
    await expect(page.getByRole("link", { name: "Explore the Admissions Roadmap" })).toBeVisible();

    // Test custom question in textbox
    const input = page.getByPlaceholder("Ask about admissions, programs, fees...");
    await input.fill("What is the fee structure?");
    await page.getByRole("button", { name: "Send message" }).click();

    // Expect fee response
    await expect(page.getByRole("heading", { name: "Tuition Fees & Scholarships 💰" })).toBeVisible({
      timeout: 10_000,
    });

    // Close chat
    const closeBtn = page.getByRole("button", { name: "Close chat" });
    await closeBtn.click();
    await expect(dialog).not.toBeVisible();
    await expect(launcher).toBeVisible();
  });
});
