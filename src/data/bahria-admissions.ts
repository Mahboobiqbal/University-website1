import { ADMISSION_INFO, WOMEN_CAMPUS_FALL_2026_PROGRAMS } from "./admissions";
import { DEPARTMENTS, type Department } from "./departments";

export type AdmissionLevel = "undergraduate" | "masters" | "phd";
export type AdmissionCategoryKey = AdmissionLevel;

export interface Programme {
  slug: string;
  name: string;
  duration: string;
  credits: string;
  sourceId: string;
  sourceUrl: string;
  detailKey?: string;
}

export interface ProgrammeGroup {
  name: string;
  programmes: Programme[];
}

export interface AdmissionCampus {
  id: string;
  name: string;
  groups: ProgrammeGroup[];
}

export interface InfoButton {
  label: string;
  href: string;
  key: string;
}

export interface AdmissionCategory {
  key: AdmissionCategoryKey;
  label: string;
  subtitle: string;
  href: string;
  detailed: boolean;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function isProgramForLevel(programLevel: string, level: AdmissionLevel): boolean {
  const normalized = programLevel.toLowerCase();
  if (level === "undergraduate") return normalized === "undergraduate";
  if (level === "phd") return normalized.includes("phd");
  return (
    normalized.includes("ms") ||
    normalized.includes("m.phil") ||
    normalized.includes("mphil") ||
    normalized.includes("master") ||
    normalized.includes("mba") ||
    normalized.includes("llm")
  );
}

function makeProgramme(
  name: string,
  sourceId: string,
  sourceUrl: string
): Programme {
  const displayName = name.replace(/intelligeance/i, "intelligence");
  return {
    slug: `${slugify(displayName)}-${slugify(sourceId)}`,
    name: displayName,
    duration: "Not verified",
    credits: "Not verified",
    sourceId,
    sourceUrl,
  };
}

function groupsForDepartmentRecords(
  departments: Department[],
  level: AdmissionLevel,
  campusId: string
): ProgrammeGroup[] {
  return departments
    .map((department) => {
      const programmes = department.programs
        .filter((program) => isProgramForLevel(program.level, level))
        .map((program, index) =>
          makeProgramme(
            program.name,
            `${campusId}-${department.id}-${index + 1}`,
            department.sourceUrl
          )
        );
      return { name: department.name, programmes };
    })
    .filter((group) => group.programmes.length > 0);
}

function womenCampusGroups(): ProgrammeGroup[] {
  const grouped = new Map<string, ProgrammeGroup>();
  for (const [index, item] of WOMEN_CAMPUS_FALL_2026_PROGRAMS.entries()) {
    const department = DEPARTMENTS.find((entry) => entry.id === item.departmentId);
    const groupName = department?.name ?? "Women Campus programmes";
    const group = grouped.get(groupName) ?? { name: groupName, programmes: [] };
    group.programmes.push(
      makeProgramme(
        item.name,
        `women-campus-${item.departmentId}-${index + 1}`,
        department?.sourceUrl ?? "https://uswat.edu.pk/women-campus/"
      )
    );
    grouped.set(groupName, group);
  }
  return [...grouped.values()];
}

function mainCampus(level: AdmissionLevel): AdmissionCampus {
  return {
    id: "main-campus",
    name: "Main Campus, Charbagh",
    groups: groupsForDepartmentRecords(DEPARTMENTS, level, "main-campus"),
  };
}

export const ADMISSION_CATEGORIES: AdmissionCategory[] = [
  {
    key: "undergraduate",
    label: "Undergraduate",
    subtitle: "BS programmes",
    href: "/admissions/undergraduate",
    detailed: true,
  },
  {
    key: "masters",
    label: "Masters",
    subtitle: "MS/MPhil programmes",
    href: "/admissions/masters",
    detailed: true,
  },
  {
    key: "phd",
    label: "PhD",
    subtitle: "Doctoral programmes",
    href: "/admissions/phd",
    detailed: true,
  },
];

export const LEVEL_LABELS: Record<AdmissionLevel, string> = {
  undergraduate: "Undergraduate Programmes",
  masters: "MS/MPhil Programmes",
  phd: "PhD Programmes",
};

export const LEVEL_SHORT_LABELS: Record<AdmissionLevel, string> = {
  undergraduate: "Undergraduate",
  masters: "Masters",
  phd: "PhD",
};

export const TEST_GUIDANCE: Record<AdmissionLevel, string> = {
  undergraduate:
    ADMISSION_INFO["test-subjects"].details[0],
  masters:
    "Check the current MS/MPhil admission notice for test requirements and subjects. A current subject list and exemption policy were not verified.",
  phd:
    "Check the current PhD admission notice for test requirements and subjects. A current subject list and exemption policy were not verified.",
};

export const ROADMAPS: Record<AdmissionLevel, AdmissionCampus[]> = {
  undergraduate: [
    mainCampus("undergraduate"),
    {
      id: "women-campus",
      name: "Women Campus",
      groups: womenCampusGroups(),
    },
  ],
  masters: [mainCampus("masters")],
  phd: [mainCampus("phd")],
};

export function getCampus(level: AdmissionLevel, campusId: string): AdmissionCampus | undefined {
  return ROADMAPS[level].find((campus) => campus.id === campusId);
}

export function getProgramme(
  level: AdmissionLevel,
  campusId: string,
  programmeSlug: string
): { campus: AdmissionCampus; group: ProgrammeGroup; programme: Programme } | undefined {
  const campus = getCampus(level, campusId);
  if (!campus) return undefined;
  for (const group of campus.groups) {
    const programme = group.programmes.find((item) => item.slug === programmeSlug);
    if (programme) return { campus, group, programme };
  }
  return undefined;
}

export function getInfoButtons(level: AdmissionLevel): InfoButton[] {
  const fee =
    level === "undergraduate"
      ? { label: "Fee Structure Undergraduate", href: "/admissions/guide/fee-undergraduate", key: "fee-undergraduate" }
      : level === "masters"
        ? { label: "Fee Structure Masters", href: "/admissions/guide/fee-masters", key: "fee-masters" }
        : { label: "Fee Structure PhD", href: "/admissions/guide/fee-phd", key: "fee-phd" };

  return [
    { label: "How to apply", href: "/admissions/guide/how-to-apply", key: "how-to-apply" },
    { label: "Admission quota", href: "/admissions/guide/admission-quota", key: "admission-quota" },
    { label: "Admission test information", href: "/admissions/guide/test-subjects", key: "test-subjects" },
    { label: "Test exemptions", href: "/admissions/guide/test-exemption", key: "test-exemption" },
    { label: "Quick contact", href: "/admissions/guide/quick-contact", key: "quick-contact" },
    fee,
    { label: "Sample / mock papers", href: `/admissions/guide/sample-papers-${level}`, key: "sample-papers" },
    { label: "Scholarships", href: "/admissions/guide/scholarships", key: "scholarships" },
    { label: "Important dates", href: "/admissions/guide/important-dates", key: "important-dates" },
  ];
}
