export type AdmissionTopic =
  | "how-to-apply"
  | "admission-quota"
  | "test-subjects"
  | "test-exemptions"
  | "fee-structure"
  | "sample-papers"
  | "scholarships"
  | "important-dates"
  | "international-admissions"
  | "contact";

export interface AdmissionInfoPage {
  title: string;
  intro: string;
  details: string[];
  links: { label: string; href: string }[];
}

export const ADMISSION_INFO: Record<AdmissionTopic, AdmissionInfoPage> = {
  "how-to-apply": {
    title: "How to apply",
    intro:
      "Use the University's official admission notice for the intake you are applying to. It is the authoritative source for available programmes, eligibility, required documents, and deadlines.",
    details: [
      "Choose a programme and campus shown in the latest admission notice.",
      "Review the notice for eligibility, documents, application fee, and the closing date.",
      "Submit an application through the University of Swat admission portal when applications are open.",
      "Check the portal and official announcements for merit lists and follow-up instructions.",
    ],
    links: [
      { label: "Open the online admission portal", href: "https://cms1.uswat.edu.pk/" },
      {
        label: "Latest BS Fall 2026 notice",
        href: "https://uswat.edu.pk/2026/10/undergraduate-admissions-fall-2026-phase-ii/",
      },
      {
        label: "Directorate of Admissions",
        href: "https://uswat.edu.pk/directorate-of-admissions/",
      },
    ],
  },
  "admission-quota": {
    title: "Admission quota",
    intro:
      "Quota seats and selection criteria are intake-specific. The current Fall 2026 undergraduate notice does not publish a quota breakdown in its accessible text.",
    details: [
      "The University has published sports-quota admission notices for earlier intakes; those notices are historical and do not establish the rules for a new intake.",
      "Confirm any quota category, documents, trials, and deadlines in the current official admission notice or with the Directorate of Admissions.",
    ],
    links: [
      {
        label: "Historical sports-quota notice (Fall 2022)",
        href: "https://uswat.edu.pk/2022/10/sports-quota-trails-for-bs-admissions-fall-2022/",
      },
      {
        label: "Historical quota merit list (Fall 2022)",
        href: "https://uswat.edu.pk/2022/10/merit-list-of-quota-seats-bs-admissions-fall-2022/",
      },
      {
        label: "Contact the Directorate of Admissions",
        href: "mailto:admissions@uswat.edu.pk",
      },
    ],
  },
  "test-subjects": {
    title: "Admission test information",
    intro:
      "The University has documented admission tests for MS/MPhil and PhD admissions. The latest public test report located is from 2023 and does not specify question subjects or a current test schedule.",
    details: [
      "Undergraduate applicants should follow the requirements in the current BS admission notice; do not assume postgraduate test rules apply to BS programmes.",
      "For MS/MPhil and PhD, check the current intake notice for whether a test is required, the test format, subjects, and dates.",
      "No current test-subject list was found in the official admissions material reviewed for this page.",
    ],
    links: [
      {
        label: "Official MS/MPhil and PhD test report (2023)",
        href: "https://uswat.edu.pk/2023/02/ms-mphil-and-phd-test/",
      },
      {
        label: "MS/MPhil/PhD Spring 2026 admission notice",
        href: "https://uswat.edu.pk/2026/01/phdms-m-phil-and-mba-admissions-spring-2026/",
      },
      {
        label: "Directorate of Admissions",
        href: "https://uswat.edu.pk/directorate-of-admissions/",
      },
    ],
  },
  "test-exemptions": {
    title: "Admission test exemptions",
    intro:
      "A current University of Swat admission-test exemption policy could not be verified in the official public material reviewed.",
    details: [
      "Do not rely on an exemption unless it is stated in the current programme admission notice or confirmed by the Directorate of Admissions.",
      "Undergraduate and postgraduate admission requirements are published separately; a postgraduate test rule should not be applied to BS admissions.",
    ],
    links: [
      {
        label: "Check the latest official admission notices",
        href: "https://uswat.edu.pk/directorate-of-admissions/",
      },
      {
        label: "Ask the Directorate of Admissions",
        href: "mailto:admissions@uswat.edu.pk",
      },
    ],
  },
  "fee-structure": {
    title: "Fee structure",
    intro:
      "The University's public fee-structure page currently has no fee table. Fees can vary by programme, campus, and admission session, so no unverified amounts are shown here.",
    details: [
      "Read the fee and payment instructions attached to the current admission notice before submitting an application.",
      "For a current programme-specific fee breakdown, contact the Directorate of Admissions or the Treasurer's Office.",
    ],
    links: [
      { label: "Official fee-structure page", href: "https://uswat.edu.pk/fee-structure/" },
      {
        label: "Directorate of Admissions",
        href: "mailto:admissions@uswat.edu.pk",
      },
      {
        label: "Treasurer's Office",
        href: "https://uswat.edu.pk/treasurer-office/",
      },
    ],
  },
  "sample-papers": {
    title: "Sample and mock papers",
    intro:
      "No official University of Swat admission-test sample or mock-paper collection was found in the public admissions material reviewed.",
    details: [
      "Check the latest postgraduate admission notice for any programme-specific preparation guidance.",
      "The Directorate of Admissions can confirm whether sample material is available for an upcoming test.",
    ],
    links: [
      {
        label: "Latest postgraduate admission notice",
        href: "https://uswat.edu.pk/2026/01/phdms-m-phil-and-mba-admissions-spring-2026/",
      },
      {
        label: "Contact the Directorate of Admissions",
        href: "mailto:admissions@uswat.edu.pk",
      },
    ],
  },
  scholarships: {
    title: "Scholarships and financial assistance",
    intro:
      "Scholarship schemes are announced separately and have their own eligibility and deadlines. Check each notice before applying.",
    details: [
      "The University published the KPEF Merit-cum-Inaffordability Scholarship Scheme 2025–26 in November 2026.",
      "HEC need-based scholarships and other schemes are announced through separate University notices.",
      "The linked notices may describe closed or time-limited application windows; verify their dates before applying.",
    ],
    links: [
      {
        label: "KPEF Scholarship Scheme 2025–26",
        href: "https://uswat.edu.pk/2026/11/kpef-merit-cum-inaffordability-scholarship-scheme-2025-26/",
      },
      {
        label: "HEC Need-Based Scholarship notice",
        href: "https://uswat.edu.pk/2025/12/hec-need-base-scholarship-for-the-sessions-2024-28-2025-29/",
      },
      {
        label: "University scholarship announcements",
        href: "https://uswat.edu.pk/category/announcements/",
      },
    ],
  },
  "important-dates": {
    title: "Important admission dates",
    intro:
      "Dates below are from the latest published notices located during this review; they are not an announcement of an open application window.",
    details: [
      "The Fall 2026 BS Phase-II notice lists October 30, 2026 as the last date for new applications and option changes. That date has passed.",
      "The latest postgraduate notice located is for Spring 2026 and includes February 2026 merit-list and fee-submission updates. That intake has passed.",
      "No later admission schedule was verified. Check the official admissions page for a new intake.",
    ],
    links: [
      {
        label: "BS Fall 2026 Phase-II notice",
        href: "https://uswat.edu.pk/2026/10/undergraduate-admissions-fall-2026-phase-ii/",
      },
      {
        label: "BS Fall 2026 Self-Finance notice",
        href: "https://uswat.edu.pk/2026/10/undergraduate-admissions-fall-2026-self-finance/",
      },
      {
        label: "MS/MPhil/PhD Spring 2026 notice",
        href: "https://uswat.edu.pk/2026/01/phdms-m-phil-and-mba-admissions-spring-2026/",
      },
    ],
  },
  "international-admissions": {
    title: "International applicants",
    intro:
      "A separate current international-admission procedure for the University of Swat could not be verified in the public admissions information reviewed.",
    details: [
      "International applicants should contact the Directorate of Admissions before applying to confirm programme availability, equivalence requirements, documents, and the application process.",
      "Do not use a previous domestic admission notice as confirmation of international eligibility.",
    ],
    links: [
      {
        label: "Email the Directorate of Admissions",
        href: "mailto:admissions@uswat.edu.pk",
      },
      {
        label: "Official Directorate of Admissions",
        href: "https://uswat.edu.pk/directorate-of-admissions/",
      },
    ],
  },
  contact: {
    title: "Contact Admissions",
    intro:
      "The University of Swat Directorate of Admissions publishes admissions information and contact details for applicants.",
    details: [
      "Email: admissions@uswat.edu.pk",
      "Phone listed on the Fall 2026 admission notice: +92 946 920809.",
      "Office: Main Campus, Charbagh, University of Swat.",
    ],
    links: [
      {
        label: "Email the Directorate of Admissions",
        href: "mailto:admissions@uswat.edu.pk",
      },
      {
        label: "Open the official admissions office page",
        href: "https://uswat.edu.pk/directorate-of-admissions/",
      },
    ],
  },
};

export const ADMISSION_NOTICES = [
  {
    title: "BS Fall 2026 — Phase II (limited seats)",
    detail:
      "The notice lists October 30, 2026 as the last date for new applications and option changes. The deadline has passed.",
    href: "https://uswat.edu.pk/2026/10/undergraduate-admissions-fall-2026-phase-ii/",
    status: "Deadline passed",
  },
  {
    title: "BS Fall 2026 — Self-Finance",
    detail:
      "The University published a separate self-finance notice and merit-list link for the Fall 2026 intake.",
    href: "https://uswat.edu.pk/2026/10/undergraduate-admissions-fall-2026-self-finance/",
    status: "Past intake",
  },
  {
    title: "MS/MPhil/PhD Spring 2026",
    detail:
      "The latest postgraduate notice located contains Spring 2026 merit-list and fee-submission updates.",
    href: "https://uswat.edu.pk/2026/01/phdms-m-phil-and-mba-admissions-spring-2026/",
    status: "Past intake",
  },
] as const;

export const ADMISSION_CAMPUSES = [
  {
    id: "main-campus",
    name: "Main Campus, Charbagh",
    description:
      "The University's Fall 2026 BS notice lists programmes at the Main Campus. Department programme records are shown below; current intake availability is controlled by the official admission notice.",
    href: "https://uswat.edu.pk/maincampus/",
  },
  {
    id: "women-campus",
    name: "Women Campus",
    description:
      "The Fall 2026 notice lists BS Psychology, BS Zoology, BS Home Economics, and BS Botany for the Women Campus. Other campus/programme combinations require confirmation from a current notice.",
    href: "https://uswat.edu.pk/women-campus/",
  },
] as const;

export const WOMEN_CAMPUS_FALL_2026_PROGRAMS = [
  { name: "BS Psychology", departmentId: "psychological-studies" },
  { name: "BS Zoology", departmentId: "zoology" },
  { name: "BS Home Economics", departmentId: "home-economics" },
  { name: "BS Botany", departmentId: "botany" },
] as const;

export function slugifyAdmissionProgram(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
