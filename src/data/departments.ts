import { IMAGES } from "./images";
import { DEPARTMENTS_HUMANITIES, type DepartmentDetail } from "./departments-humanities";
import { DEPARTMENTS_SCIENCES } from "./departments-sciences";
import { DEPARTMENTS_SOCIAL } from "./departments-social";
import { DEPARTMENTS_CORE } from "./departments-core";

export type { DepartmentDetail };

const ALL_DETAILS: DepartmentDetail[] = [
  ...DEPARTMENTS_CORE,
  ...DEPARTMENTS_HUMANITIES,
  ...DEPARTMENTS_SCIENCES,
  ...DEPARTMENTS_SOCIAL,
];

type DeptImageMap = Record<string, string>;
const imageMap = IMAGES.departments as DeptImageMap;

export interface Department extends DepartmentDetail {
  image: string;
  faculty: string;
  href: string;
}

const facultyByDept: Record<string, string> = {
  "english-foreign-languages": "Religious, Languages, Humanities & Legal Studies",
  "islamic-arabic-studies": "Religious, Languages, Humanities & Legal Studies",
  "pashto-local-languages": "Religious, Languages, Humanities & Legal Studies",
  "law-shariah": "Religious, Languages, Humanities & Legal Studies",
  urdu: "Religious, Languages, Humanities & Legal Studies",
  physics: "Physical, Numerical & Computational Sciences",
  "computer-software-technology": "Physical, Numerical & Computational Sciences",
  "mathematics-statistics": "Physical, Numerical & Computational Sciences",
  geology: "Physical, Numerical & Computational Sciences",
  "economics-development-studies": "Management, Art & Social Sciences",
  archaeology: "Management, Art & Social Sciences",
  "tourism-hospitality": "Management, Art & Social Sciences",
  "management-commerce": "Management, Art & Social Sciences",
  "pakistan-studies": "Management, Art & Social Sciences",
  "media-communication-studies": "Management, Art & Social Sciences",
  "social-gender-studies": "Management, Art & Social Sciences",
  "psychological-studies": "Management, Art & Social Sciences",
  "education-staff-training": "Management, Art & Social Sciences",
  "environmental-sciences": "Biological & Chemical Sciences",
  chemistry: "Biological & Chemical Sciences",
  zoology: "Biological & Chemical Sciences",
  "agricultural-sciences-forestry": "Biological & Chemical Sciences",
  botany: "Biological & Chemical Sciences",
  "biotechnology-genetics-forensic-microbiology": "Biological & Chemical Sciences",
  "allied-health-sciences": "Faculty of Allied Health Sciences",
  hunerkada: "Hunerkada (Centre of Excellence for Art & Culture)",
};

export const DEPARTMENTS: Department[] = ALL_DETAILS.map((dept) => ({
  ...dept,
  image:
    imageMap[dept.id] ||
    "https://images.pexels.com/photos/3754756/pexels-photo-3754756.jpeg?auto=compress&cs=tinysrgb&w=800",
  faculty: facultyByDept[dept.id] || "",
  href: `/department/${dept.id}`,
}));

export function getDepartmentById(id: string): Department | undefined {
  return DEPARTMENTS.find((d) => d.id === id);
}

export function getDepartmentsByFaculty(facultyName: string): Department[] {
  return DEPARTMENTS.filter((d) => d.faculty === facultyName);
}

export function slugifyFacultyName(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getFacultyMember(departmentId: string, memberSlug: string) {
  const department = getDepartmentById(departmentId);
  if (!department) return undefined;
  const member = department.facultyMembers.find(
    (item) => slugifyFacultyName(item.name) === memberSlug
  );
  return member ? { department, member } : undefined;
}
