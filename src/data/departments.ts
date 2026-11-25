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

const localFacultyImage = (image: string | undefined): string => {
  if (!image?.startsWith("https://uswat.edu.pk/wp-content/uploads/")) return image || "";

  const filename = image.split("/").pop();
  if (!filename) return image;

  // These portraits are unavailable from the source website and will use
  // the existing graceful profile placeholder instead.
  const unavailable = new Set([
    "1-1.jpg",
    "FAZAL-AKBAR-PIC-150x150.jpeg",
    "KK-Copy-removebg-preview-e1759735025336-150x150.png",
    "Latest-Photo-of-Dr.-Muhammad-Noman-Assistant-Professor-e1759398022634-150x150-removebg-preview.png",
    "Mr.-Sanaullah-removebg-preview-e1759734860756-150x150.png",
    "Photo-150x150.jpg",
    "SADIQ-150x150-removebg-preview.png",
    "WhatsApp_Image_2025-10-02_at_10.32.12-removebg-preview-150x150.png",
    "amjadhilal-e1759136720703-removebg-preview-150x150.png",
    "dr_muhammad_adil-150x150.jpg",
    "eng-o1-150x150.png",
    "lutfullah-removebg-preview.png",
    "shujaat-ali-118x150-removebg-preview.png",
    "ubaid-150x150-removebg-preview.png",
    "wajid-Rashid-removebg-preview-e1759734976721-150x150.png",
    "zakir-150x150-removebg-preview.png",
    "WhatsApp-Image-2025-11-24-at-14.28.36-150x150.jpeg",
    "Screenshot-3-e1767949243305-150x150.png",
    "Subhan-Ullah-Passport-size-pic--150x150.jpeg",
    "zahid-bot-150x150.png",
    "Dr-Muhammad-Ayaz-Picture-150x150.jpg",
    "Dr.-Ihsan_Chem-150x150.jpeg",
    "WhatsApp-Image-2026-10-15-at-15.38.32-150x150.jpeg",
    "WhatsApp-Image-2026-11-11-at-14.48.51-150x150.jpeg",
    "env001.png",
  ]);

  return unavailable.has(filename) ? "" : `/faculty/${filename}`;
};

export const DEPARTMENTS: Department[] = ALL_DETAILS.map((dept) => ({
  ...dept,
  facultyMembers: dept.facultyMembers.map((member) => ({
    ...member,
    image: localFacultyImage(member.image),
  })),
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

export function slugifyProgramName(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export interface ProgramItem {
  name: string;
  slug: string;
  level: string;
  departmentId: string;
  departmentName: string;
  departmentHref: string;
  departmentImage: string;
  faculty: string;
  curriculum: { title: string; url: string }[];
  href: string;
}

export function getAllPrograms(): ProgramItem[] {
  return DEPARTMENTS.flatMap((department) =>
    department.programs.map((program) => {
      const slug = slugifyProgramName(program.name);
      return {
        name: program.name,
        slug,
        level: program.level,
        departmentId: department.id,
        departmentName: department.name,
        departmentHref: department.href,
        departmentImage: department.image,
        faculty: department.faculty,
        curriculum: department.curriculum,
        href: `/programs/${slug}`,
      };
    })
  );
}

export function getProgramBySlug(slug: string): ProgramItem | undefined {
  return getAllPrograms().find((p) => p.slug === slug);
}

export function getFacultyMember(departmentId: string, memberSlug: string) {
  const department = getDepartmentById(departmentId);
  if (!department) return undefined;
  const member = department.facultyMembers.find(
    (item) => slugifyFacultyName(item.name) === memberSlug
  );
  return member ? { department, member } : undefined;
}
