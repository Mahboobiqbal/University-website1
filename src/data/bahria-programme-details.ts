export interface CourseRow {
  sr: string;
  prerequisite: string;
  code: string;
  title: string;
  credits: string;
}

export interface Semester {
  name: string;
  total: string;
  note?: string;
  courses: CourseRow[];
}

export interface PloRow {
  no: string;
  outcome: string;
  description: string;
}

export interface ProgrammeDetail {
  sourceId: string;
  title: string;
  level: string;
  sourceUrl: string;
  important: string[];
  eligibility: string[];
  plos?: PloRow[];
  outcomes?: string[];
  semesters: Semester[];
  extraLists?: { title: string; items: string[] }[];
  deficiency?: CourseRow[];
  note?: string;
}

export const PROGRAMME_DETAILS: Record<string, ProgrammeDetail> = {};

export function getProgrammeDetail(sourceId: string | undefined): ProgrammeDetail | undefined {
  return sourceId ? PROGRAMME_DETAILS[sourceId] : undefined;
}
