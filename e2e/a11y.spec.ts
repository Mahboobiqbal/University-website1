import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

const routes = ["/", "/about", "/programs", "/search?q=physics", "/department/physics"];

test("accessibility scan of key routes for critical violations", async ({ page }) => {
  for (const route of routes) {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .disableRules(["color-contrast"])
      .analyze();

    const critical = results.violations.filter((violation) => violation.impact === "critical");
    expect(critical, `Critical violations on ${route}`).toEqual([]);
  }
});
