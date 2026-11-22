import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ProgrammeDetailBahria } from "./bahria-programme-detail";
import { ROADMAPS } from "@/data/bahria-admissions";

vi.mock("next/navigation", () => ({
  usePathname: () => "/admissions/undergraduate/main-campus/bs-computer-science",
}));

describe("University of Swat programme details", () => {
  it("uses the official department source instead of unverified programme data", () => {
    const campus = ROADMAPS.undergraduate.find((item) => item.id === "main-campus");
    const group = campus?.groups.find((item) =>
      item.programmes.some((programme) => /computer science/i.test(programme.name))
    );
    const programme = group?.programmes.find((item) => /computer science/i.test(item.name));
    expect(campus).toBeDefined();
    expect(group).toBeDefined();
    expect(programme).toBeDefined();
    if (!campus || !group || !programme) return;

    render(
      <ProgrammeDetailBahria
        level="undergraduate"
        campus={campus}
        group={group}
        programme={programme}
      />
    );

    expect(screen.getByRole("heading", { name: programme.name })).toBeInTheDocument();
    expect(screen.getByText("Detailed curriculum")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Official programme details/i })).toHaveAttribute(
      "href",
      programme.sourceUrl
    );
    expect(screen.getByRole("link", { name: /Back to Undergraduate admissions/i })).toHaveAttribute(
      "href",
      "/admissions/undergraduate?campus=main-campus"
    );
    expect(screen.queryByText(/Bahria|BUET/i)).not.toBeInTheDocument();
  });
});
