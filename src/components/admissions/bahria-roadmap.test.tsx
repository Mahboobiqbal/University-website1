import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { AdmissionRoadmapBahria } from "./bahria-roadmap";
import { ROADMAPS } from "@/data/bahria-admissions";

describe("University of Swat admissions roadmap", () => {
  it("opens a University of Swat campus, its guide links and a programme group", async () => {
    const user = userEvent.setup();
    const campus = ROADMAPS.undergraduate.find((item) => item.id === "main-campus");
    const group = campus?.groups.find((item) =>
      item.programmes.some((programme) => /computer science/i.test(programme.name))
    );
    const programme = group?.programmes.find((item) => /computer science/i.test(item.name));
    expect(campus).toBeDefined();
    expect(group).toBeDefined();
    expect(programme).toBeDefined();
    if (!campus || !group || !programme) return;

    render(<AdmissionRoadmapBahria level="undergraduate" />);

    await user.click(screen.getByRole("button", { name: new RegExp(campus.name, "i") }));
    expect(screen.getByRole("link", { name: /Fee Structure Undergraduate/i })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: new RegExp(group.name, "i") }));
    const programmeLink = screen.getByRole("link", { name: new RegExp(programme.name, "i") });
    expect(programmeLink).toHaveAttribute(
      "href",
      `/admissions/undergraduate/${campus.id}/${programme.slug}`
    );
  });

  it("filters programmes and shows an empty state", async () => {
    const user = userEvent.setup();
    render(<AdmissionRoadmapBahria level="masters" />);

    const input = screen.getByLabelText(/Search programmes, subjects or campuses/i);
    await user.type(input, "computer science");
    expect(screen.getByText(/results? for/i)).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /Computer Science/i }).length).toBeGreaterThan(0);

    await user.clear(input);
    await user.type(input, "not-a-real-programme");
    expect(screen.getByText("No programmes found")).toBeInTheDocument();
  });

  it("opens a campus supplied by the URL and contains no Shangla campus", () => {
    render(<AdmissionRoadmapBahria level="phd" initialCampus="main-campus" />);
    expect(screen.getByRole("link", { name: /Fee Structure PhD/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Main Campus, Charbagh/i }).getAttribute("aria-expanded")
    ).toBe("true");
    expect(screen.queryByText(/Shangla/i)).not.toBeInTheDocument();
  });
});
