import { DEPARTMENTS, getDepartmentById } from "./departments";

export { DEPARTMENTS, getDepartmentById };
export type { Department, DepartmentDetail } from "./departments";

export const FACULTIES = [
  {
    id: "religious-languages-humanities-legal",
    name: "Religious, Languages, Humanities & Legal Studies",
    departments: [
      { id: "english-foreign-languages", name: "Department of English and Foreign Languages", href: "/department/english-foreign-languages" },
      { id: "islamic-arabic-studies", name: "Department of Islamic and Arabic Studies", href: "/department/islamic-arabic-studies" },
      { id: "pashto-local-languages", name: "Department of Pashto and Local Languages", href: "/department/pashto-local-languages" },
      { id: "law-shariah", name: "Department of Law & Shariah", href: "/department/law-shariah" },
      { id: "urdu", name: "Department of Urdu", href: "/department/urdu" },
    ],
  },
  {
    id: "physical-numerical-computational",
    name: "Physical, Numerical & Computational Sciences",
    departments: [
      { id: "physics", name: "Department of Physics", href: "/department/physics" },
      { id: "computer-software-technology", name: "Department of Computer and Software Technology", href: "/department/computer-software-technology" },
      { id: "mathematics-statistics", name: "Department of Mathematics and Statistics", href: "/department/mathematics-statistics" },
      { id: "geology", name: "Department of Geology", href: "/department/geology" },
    ],
  },
  {
    id: "management-art-social",
    name: "Management, Art & Social Sciences",
    departments: [
      { id: "economics-development-studies", name: "Department of Economics and Development Studies", href: "/department/economics-development-studies" },
      { id: "archaeology", name: "Department of Archaeology", href: "/department/archaeology" },
      { id: "tourism-hospitality", name: "Department of Tourism and Hospitality", href: "/department/tourism-hospitality" },
      { id: "management-commerce", name: "Department of Management & Commerce", href: "/department/management-commerce" },
      { id: "pakistan-studies", name: "Department of Pakistan Studies", href: "/department/pakistan-studies" },
      { id: "media-communication-studies", name: "Department of Media and Communication Studies", href: "/department/media-communication-studies" },
      { id: "social-gender-studies", name: "Department of Social and Gender Studies", href: "/department/social-gender-studies" },
      { id: "psychological-studies", name: "Department of Psychological Studies", href: "/department/psychological-studies" },
      { id: "education-staff-training", name: "Department of Education and Staff Training", href: "/department/education-staff-training" },
    ],
  },
  {
    id: "biological-chemical",
    name: "Biological & Chemical Sciences",
    departments: [
      { id: "environmental-sciences", name: "Department of Environmental Sciences", href: "/department/environmental-sciences" },
      { id: "chemistry", name: "Department of Chemistry", href: "/department/chemistry" },
      { id: "zoology", name: "Department of Zoology", href: "/department/zoology" },
      { id: "agricultural-sciences-forestry", name: "Department of Agricultural Sciences and Forestry", href: "/department/agricultural-sciences-forestry" },
      { id: "botany", name: "Department of Botany", href: "/department/botany" },
      { id: "biotechnology-genetics-forensic-microbiology", name: "Department of Biotechnology, Genetics, Forensic and Microbiology", href: "/department/biotechnology-genetics-forensic-microbiology" },
    ],
  },
  {
    id: "allied-health-sciences",
    name: "Faculty of Allied Health Sciences",
    departments: [
      { id: "allied-health-sciences", name: "Faculty of Allied Health Sciences", href: "/department/allied-health-sciences" },
    ],
  },
  {
    id: "hunerkada",
    name: "Hunerkada (Centre of Excellence for Art & Culture)",
    departments: [
      { id: "hunerkada", name: "Hunerkada", href: "/department/hunerkada" },
    ],
  },
];
