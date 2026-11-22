import {
  ADMISSION_INFO,
  ADMISSION_NOTICES,
  type AdmissionTopic,
} from "./admissions";

export interface GuideTable {
  headings: string[];
  rows: string[][];
}

export interface GuideSection {
  heading: string;
  bullets?: string[];
  table?: GuideTable;
}

export interface AdmissionGuide {
  title: string;
  intro: string;
  officialUrl: string;
  sections: GuideSection[];
  links: { label: string; href: string }[];
}

export const ADMISSION_ANNOUNCEMENTS = ADMISSION_NOTICES;

function makeGuide(topic: AdmissionTopic, title?: string): AdmissionGuide {
  const info = ADMISSION_INFO[topic];
  return {
    title: title ?? info.title,
    intro: info.intro,
    officialUrl:
      info.links.find((link) => link.href.startsWith("https://"))?.href ??
      "https://uswat.edu.pk/directorate-of-admissions/",
    sections: [{ heading: "University of Swat guidance", bullets: info.details }],
    links: info.links,
  };
}

export const ADMISSION_GUIDES: Record<string, AdmissionGuide> = {
  "how-to-apply": makeGuide("how-to-apply"),
  "admission-quota": makeGuide("admission-quota"),
  "test-subjects": makeGuide("test-subjects"),
  "test-exemption": makeGuide("test-exemptions"),
  "quick-contact": makeGuide("contact", "Quick Contact"),
  "fee-undergraduate": makeGuide("fee-structure", "Fee Structure — Undergraduate"),
  "fee-masters": makeGuide("fee-structure", "Fee Structure — MS/MPhil"),
  "fee-phd": makeGuide("fee-structure", "Fee Structure — PhD"),
  "sample-papers-undergraduate": makeGuide("sample-papers", "Sample / Mock Papers — Undergraduate"),
  "sample-papers-masters": makeGuide("sample-papers", "Sample / Mock Papers — MS/MPhil"),
  "sample-papers-phd": makeGuide("sample-papers", "Sample / Mock Papers — PhD"),
  scholarships: makeGuide("scholarships"),
  "important-dates": makeGuide("important-dates"),
  "international-admissions": makeGuide("international-admissions"),
};
