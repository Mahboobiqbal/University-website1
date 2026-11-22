import { describe, expect, it } from "vitest";
import {
  ADMISSION_CATEGORIES,
  getInfoButtons,
  getProgramme,
  ROADMAPS,
  type AdmissionLevel,
} from "./bahria-admissions";
import { PROGRAMME_DETAILS } from "./bahria-programme-details";
import { ADMISSION_GUIDES } from "./bahria-guide";

const levels: AdmissionLevel[] = ["undergraduate", "masters", "phd"];

describe("University of Swat admissions data", () => {
  it("offers only the three University of Swat degree levels", () => {
    expect(ADMISSION_CATEGORIES.map((item) => item.key)).toEqual([
      "undergraduate",
      "masters",
      "phd",
    ]);
  });

  it("contains only verified University of Swat campuses and sources", () => {
    for (const level of levels) {
      expect(ROADMAPS[level].some((campus) => /shangla/i.test(campus.name))).toBe(false);
      for (const campus of ROADMAPS[level]) {
        expect(campus.id).not.toBe("shangla-campus");
        for (const group of campus.groups) {
          for (const programme of group.programmes) {
            expect(programme.sourceUrl).toMatch(/^https:\/\/uswat\.edu\.pk\//);
            expect(programme.name).not.toMatch(/bahria|buet/i);
            expect(getProgramme(level, campus.id, programme.slug)?.programme.name).toBe(
              programme.name
            );
          }
        }
      }
    }
  });

  it("lists the verified Women Campus undergraduate programmes only", () => {
    const campus = ROADMAPS.undergraduate.find((item) => item.id === "women-campus");
    const names = campus?.groups.flatMap((group) =>
      group.programmes.map((programme) => programme.name)
    );
    expect(names).toEqual([
      "BS Psychology",
      "BS Zoology",
      "BS Home Economics",
      "BS Botany",
    ]);
    expect(ROADMAPS.masters.some((item) => item.id === "women-campus")).toBe(false);
    expect(ROADMAPS.phd.some((item) => item.id === "women-campus")).toBe(false);
  });

  it("links each admission information button to a University of Swat guide", () => {
    for (const level of levels) {
      for (const button of getInfoButtons(level)) {
        const topic = button.href.split("/").pop() ?? "";
        expect(ADMISSION_GUIDES[topic]).toBeDefined();
      }
    }
    expect(Object.values(ADMISSION_GUIDES).flatMap((guide) => guide.links).some(
      (link) => /bahria|buet/i.test(link.href)
    )).toBe(false);
  });

  it("does not display unverified Bahria curriculum, PLO or eligibility data", () => {
    expect(Object.keys(PROGRAMME_DETAILS)).toHaveLength(0);
  });
});
