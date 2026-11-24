import { type ProgramItem } from "./departments";

export interface ProgramCourse {
  code: string;
  title: string;
  credits: number;
  type: "Core" | "General" | "Foundation" | "Elective" | "Lab" | "Thesis" | "Internship";
}

export interface ProgramSemester {
  semesterNumber: number;
  semesterName: string;
  totalCredits: number;
  courses: ProgramCourse[];
}

export interface ProgramSnapshot {
  degreeLevel: string;
  duration: string;
  totalSemesters: string;
  creditHours: string;
  studyMode: string;
  medium: string;
  awardingBody: string;
  campus: string;
  intakeSchedule: string;
  accreditation: string;
}

export interface ProgramEnrollment {
  annualSeats: number;
  admissionStatus: "Admissions Open" | "Upcoming Intake (Fall 2026)";
  sessionLabel: string;
  quotas: { category: string; description: string; percentage?: string }[];
  applicationMode: string;
  hostelTransport: string;
}

export interface ProgramEligibility {
  academicRequirement: string;
  minimumMarks: string;
  criteriaDetails: string[];
  entryRequirements: string[];
  ageLimit: string;
}

export interface LearningOutcome {
  title: string;
  description: string;
  category: "Knowledge" | "Technical" | "Analysis" | "Ethics" | "Research";
}

export interface CareerProspects {
  sectors: string[];
  roles: string[];
  higherStudies: string;
  industryPartnerships: string;
}

export interface ProgramDetailRecord {
  slug: string;
  name: string;
  departmentId: string;
  departmentName: string;
  departmentHref: string;
  departmentImage: string;
  faculty: string;
  curriculum: { title: string; url: string }[];
  overview: string;
  snapshot: ProgramSnapshot;
  enrollment: ProgramEnrollment;
  eligibility: ProgramEligibility;
  learningOutcomes: LearningOutcome[];
  schemeOfStudies: ProgramSemester[];
  careerProspects: CareerProspects;
}

type DisciplineCategory =
  | "computing"
  | "physics"
  | "mathematics"
  | "geology"
  | "chemistry"
  | "biological"
  | "health"
  | "business"
  | "economics"
  | "social"
  | "humanities"
  | "law"
  | "arts"
  | "education"
  | "general";

function detectDiscipline(programName: string, departmentId: string): DisciplineCategory {
  const p = programName.toLowerCase();
  const d = departmentId.toLowerCase();

  if (p.includes("computer") || p.includes("software") || p.includes("information technology") || p.includes("artificial") || p.includes("data science") || d.includes("computer")) {
    return "computing";
  }
  if (p.includes("physics") || d.includes("physics")) {
    return "physics";
  }
  if (p.includes("mathematics") || p.includes("statistics") || d.includes("mathematics")) {
    return "mathematics";
  }
  if (p.includes("geology") || d.includes("geology")) {
    return "geology";
  }
  if (p.includes("chemistry") || d.includes("chemistry")) {
    return "chemistry";
  }
  if (p.includes("health") || p.includes("laboratory") || p.includes("mlt") || p.includes("nursing") || p.includes("radiography") || p.includes("anesthesia") || d.includes("allied-health")) {
    return "health";
  }
  if (p.includes("botany") || p.includes("zoology") || p.includes("biotechnology") || p.includes("microbiology") || p.includes("genetics") || p.includes("agriculture") || p.includes("forestry") || d.includes("zoology") || d.includes("botany") || d.includes("biotechnology") || d.includes("agricultural")) {
    return "biological";
  }
  if (p.includes("bba") || p.includes("mba") || p.includes("commerce") || p.includes("accounting") || p.includes("finance") || p.includes("management") || d.includes("management-commerce")) {
    return "business";
  }
  if (p.includes("economics") || p.includes("development") || d.includes("economics")) {
    return "economics";
  }
  if (p.includes("law") || p.includes("llb") || p.includes("llm") || d.includes("law")) {
    return "law";
  }
  if (p.includes("education") || p.includes("b.ed") || p.includes("m.ed") || d.includes("education")) {
    return "education";
  }
  if (p.includes("art") || p.includes("bfa") || p.includes("design") || p.includes("textile") || d.includes("hunerkada")) {
    return "arts";
  }
  if (p.includes("english") || p.includes("urdu") || p.includes("pashto") || p.includes("islamic") || p.includes("arabic") || d.includes("english") || d.includes("urdu") || d.includes("pashto") || d.includes("islamic")) {
    return "humanities";
  }
  if (p.includes("psychology") || p.includes("social work") || p.includes("sociology") || p.includes("journalism") || p.includes("media") || p.includes("archaeology") || p.includes("tourism") || d.includes("social") || d.includes("psycholog") || d.includes("media") || d.includes("archaeology") || d.includes("tourism")) {
    return "social";
  }
  return "general";
}

function getDisciplineCourses(discipline: DisciplineCategory, programName: string): ProgramCourse[][] {
  switch (discipline) {
    case "computing":
      return [
        [
          { code: "CS-101", title: "Introduction to Information & Communication Technology", credits: 3, type: "Foundation" },
          { code: "CS-102", title: "Programming Fundamentals", credits: 4, type: "Core" },
          { code: "MTH-101", title: "Calculus & Analytical Geometry", credits: 3, type: "Foundation" },
          { code: "ENG-101", title: "Functional English", credits: 3, type: "General" },
          { code: "ISL-101", title: "Islamic Studies / Ethics", credits: 2, type: "General" },
        ],
        [
          { code: "CS-103", title: "Object Oriented Programming", credits: 4, type: "Core" },
          { code: "CS-104", title: "Discrete Structures", credits: 3, type: "Core" },
          { code: "PHY-101", title: "Applied Physics & Electronics", credits: 3, type: "Foundation" },
          { code: "ENG-102", title: "Expository Writing & Technical Communication", credits: 3, type: "General" },
          { code: "PAK-101", title: "Pakistan Studies & Ideology", credits: 2, type: "General" },
        ],
        [
          { code: "CS-201", title: "Data Structures & Algorithms", credits: 4, type: "Core" },
          { code: "CS-202", title: "Digital Logic & Computer Design", credits: 4, type: "Core" },
          { code: "MTH-201", title: "Linear Algebra & Differential Equations", credits: 3, type: "Foundation" },
          { code: "CS-203", title: "Professional Practices & Ethics", credits: 3, type: "General" },
          { code: "MGT-101", title: "Principles of Management", credits: 3, type: "General" },
        ],
        [
          { code: "CS-204", title: "Database Systems & Design", credits: 4, type: "Core" },
          { code: "CS-205", title: "Operating Systems & Concurrency", credits: 4, type: "Core" },
          { code: "CS-206", title: "Computer Organization & Assembly Language", credits: 3, type: "Core" },
          { code: "STA-201", title: "Probability & Applied Statistics", credits: 3, type: "Foundation" },
          { code: "SE-201", title: "Software Engineering Fundamentals", credits: 3, type: "Core" },
        ],
        [
          { code: "CS-301", title: "Computer Networks & Data Communication", credits: 4, type: "Core" },
          { code: "CS-302", title: "Design & Analysis of Algorithms", credits: 3, type: "Core" },
          { code: "CS-303", title: "Theory of Automata & Formal Languages", credits: 3, type: "Core" },
          { code: "AI-301", title: "Artificial Intelligence & Expert Systems", credits: 3, type: "Elective" },
          { code: "WEB-301", title: "Web Technologies & Cloud Services", credits: 3, type: "Elective" },
        ],
        [
          { code: "CS-304", title: "Information & Network Security", credits: 3, type: "Core" },
          { code: "CS-305", title: "Compiler Construction & Optimization", credits: 3, type: "Core" },
          { code: "CS-306", title: "Mobile Application Development", credits: 3, type: "Elective" },
          { code: "DS-301", title: "Data Science & Big Data Analytics", credits: 3, type: "Elective" },
          { code: "MGT-301", title: "Technology Entrepreneurship", credits: 3, type: "General" },
        ],
        [
          { code: "CS-401", title: "Final Year Capstone Project I", credits: 3, type: "Thesis" },
          { code: "CS-402", title: "Parallel & Distributed Computing", credits: 3, type: "Core" },
          { code: "SE-401", title: "Software Quality Assurance & Testing", credits: 3, type: "Elective" },
          { code: "CS-403", title: "Machine Learning & Pattern Recognition", credits: 3, type: "Elective" },
          { code: "INT-401", title: "Industrial Summer Internship", credits: 1, type: "Internship" },
        ],
        [
          { code: "CS-404", title: "Final Year Capstone Project II", credits: 3, type: "Thesis" },
          { code: "CS-405", title: "Human Computer Interaction & UX", credits: 3, type: "Core" },
          { code: "CS-406", title: "Internet of Things & Embedded Systems", credits: 3, type: "Elective" },
          { code: "CS-407", title: "Cloud Native Architecture & DevOps", credits: 3, type: "Elective" },
          { code: "CS-408", title: "Comprehensive Departmental Viva Voce", credits: 2, type: "Core" },
        ],
      ];

    case "physics":
      return [
        [
          { code: "PHY-101", title: "Mechanics & Special Relativity", credits: 4, type: "Core" },
          { code: "MTH-101", title: "Calculus I", credits: 3, type: "Foundation" },
          { code: "ENG-101", title: "English I (Functional English)", credits: 3, type: "General" },
          { code: "ISL-101", title: "Islamic Studies / Ethics", credits: 2, type: "General" },
          { code: "CHM-101", title: "Introduction to General Chemistry", credits: 3, type: "Foundation" },
        ],
        [
          { code: "PHY-102", title: "Waves & Oscillations", credits: 4, type: "Core" },
          { code: "PHY-103", title: "Physics Laboratory I", credits: 1, type: "Lab" },
          { code: "MTH-102", title: "Calculus II", credits: 3, type: "Foundation" },
          { code: "ENG-102", title: "English II (Communication Skills)", credits: 3, type: "General" },
          { code: "PAK-101", title: "Pakistan Studies", credits: 2, type: "General" },
        ],
        [
          { code: "PHY-201", title: "Electricity & Magnetism", credits: 4, type: "Core" },
          { code: "PHY-202", title: "Physics Laboratory II", credits: 1, type: "Lab" },
          { code: "MTH-201", title: "Linear Algebra & Differential Equations", credits: 3, type: "Foundation" },
          { code: "CS-101", title: "Introduction to Programming in Physics", credits: 3, type: "General" },
          { code: "ENG-201", title: "Technical Writing & Presentation Skills", credits: 3, type: "General" },
        ],
        [
          { code: "PHY-203", title: "Heat, Thermodynamics & Kinetic Theory", credits: 4, type: "Core" },
          { code: "PHY-204", title: "Modern Physics & Quantum Concepts", credits: 3, type: "Core" },
          { code: "MTH-202", title: "Multivariable Calculus & Vector Analysis", credits: 3, type: "Foundation" },
          { code: "PHY-205", title: "Physics Laboratory III", credits: 2, type: "Lab" },
          { code: "MGT-101", title: "Environmental Safety & Radiation Protection", credits: 2, type: "General" },
        ],
        [
          { code: "PHY-301", title: "Mathematical Methods of Physics I", credits: 3, type: "Core" },
          { code: "PHY-302", title: "Classical Mechanics & Dynamics", credits: 3, type: "Core" },
          { code: "PHY-303", title: "Electrodynamics I", credits: 3, type: "Core" },
          { code: "PHY-304", title: "Quantum Mechanics I", credits: 3, type: "Core" },
          { code: "PHY-305", title: "Electronics I (Analog & Digital)", credits: 4, type: "Core" },
        ],
        [
          { code: "PHY-306", title: "Mathematical Methods of Physics II", credits: 3, type: "Core" },
          { code: "PHY-307", title: "Electrodynamics II", credits: 3, type: "Core" },
          { code: "PHY-308", title: "Quantum Mechanics II", credits: 3, type: "Core" },
          { code: "PHY-309", title: "Thermal & Statistical Physics", credits: 3, type: "Core" },
          { code: "PHY-310", title: "Advanced Physics Laboratory IV", credits: 2, type: "Lab" },
        ],
        [
          { code: "PHY-401", title: "Atomic & Molecular Physics", credits: 3, type: "Core" },
          { code: "PHY-402", title: "Solid State Physics I", credits: 3, type: "Core" },
          { code: "PHY-403", title: "Nuclear Physics I", credits: 3, type: "Core" },
          { code: "PHY-404", title: "Computational Physics & Modeling", credits: 3, type: "Elective" },
          { code: "PHY-405", title: "Research Project / Thesis I", credits: 3, type: "Thesis" },
        ],
        [
          { code: "PHY-406", title: "Solid State Physics II", credits: 3, type: "Core" },
          { code: "PHY-407", title: "Laser Physics & Photonics", credits: 3, type: "Elective" },
          { code: "PHY-408", title: "Particle Physics & Cosmology", credits: 3, type: "Elective" },
          { code: "PHY-409", title: "Research Project / Thesis II & Defense", credits: 3, type: "Thesis" },
          { code: "PHY-410", title: "Comprehensive Departmental Viva Voce", credits: 2, type: "Core" },
        ],
      ];

    case "health":
      return [
        [
          { code: "AHS-101", title: "Human Anatomy I (Gross & Histology)", credits: 4, type: "Core" },
          { code: "AHS-102", title: "Human Physiology I", credits: 4, type: "Core" },
          { code: "AHS-103", title: "Medical Biochemistry I", credits: 3, type: "Core" },
          { code: "ENG-101", title: "English I (Functional English)", credits: 3, type: "General" },
          { code: "ISL-101", title: "Islamic Studies / Ethics", credits: 2, type: "General" },
        ],
        [
          { code: "AHS-104", title: "Human Anatomy II", credits: 4, type: "Core" },
          { code: "AHS-105", title: "Human Physiology II", credits: 4, type: "Core" },
          { code: "AHS-106", title: "Medical Biochemistry II", credits: 3, type: "Core" },
          { code: "ENG-102", title: "English II (Communication Skills)", credits: 3, type: "General" },
          { code: "PAK-101", title: "Pakistan Studies", credits: 2, type: "General" },
        ],
        [
          { code: "AHS-201", title: "General Pathology & Microbiology", credits: 4, type: "Core" },
          { code: "AHS-202", title: "Medical Microbiology & Immunology", credits: 4, type: "Core" },
          { code: "AHS-203", title: "General Pharmacology", credits: 3, type: "Core" },
          { code: "COM-101", title: "Introduction to Computer in Healthcare", credits: 3, type: "General" },
          { code: "AHS-204", title: "Clinical Skills & Patient Care Laboratory", credits: 2, type: "Lab" },
        ],
        [
          { code: "AHS-205", title: "Systemic Pathology & Parasitology", credits: 4, type: "Core" },
          { code: "AHS-206", title: "Clinical Hematology & Hemostasis", credits: 4, type: "Core" },
          { code: "STA-201", title: "Biostatistics in Medical Sciences", credits: 3, type: "Foundation" },
          { code: "AHS-207", title: "Hospital Orientation & Diagnostic Rotations", credits: 2, type: "Internship" },
          { code: "AHS-208", title: "Medical Genetics & Molecular Biology", credits: 3, type: "Core" },
        ],
        [
          { code: "AHS-301", title: "Clinical Chemical Pathology I", credits: 4, type: "Core" },
          { code: "AHS-302", title: "Diagnostic Microbiology & Virology", credits: 4, type: "Core" },
          { code: "AHS-303", title: "Medical Instrumentation & Quality Control", credits: 3, type: "Core" },
          { code: "AHS-304", title: "Epidemiology & Public Health", credits: 3, type: "General" },
          { code: "AHS-305", title: "Supervised Clinical Rotation I", credits: 2, type: "Internship" },
        ],
        [
          { code: "AHS-306", title: "Clinical Chemical Pathology II", credits: 4, type: "Core" },
          { code: "AHS-307", title: "Blood Banking & Transfusion Medicine", credits: 4, type: "Core" },
          { code: "AHS-308", title: "Diagnostic Histopathology & Cytology", credits: 4, type: "Core" },
          { code: "AHS-309", title: "Bioethics & Medical Law", credits: 2, type: "General" },
          { code: "AHS-310", title: "Supervised Clinical Rotation II", credits: 2, type: "Internship" },
        ],
        [
          { code: "AHS-401", title: "Molecular Diagnostics & Genomics", credits: 4, type: "Core" },
          { code: "AHS-402", title: "Research Methodology in Health Sciences", credits: 3, type: "Core" },
          { code: "AHS-403", title: "Laboratory Management & Biosafety Protocols", credits: 3, type: "Core" },
          { code: "AHS-404", title: "Hospital Clinical Internship I", credits: 3, type: "Internship" },
          { code: "AHS-405", title: "Undergraduate Research Project I", credits: 3, type: "Thesis" },
        ],
        [
          { code: "AHS-406", title: "Advances in Diagnostic Technologies", credits: 3, type: "Elective" },
          { code: "AHS-407", title: "Comprehensive Clinical Internship II", credits: 6, type: "Internship" },
          { code: "AHS-408", title: "Undergraduate Research Project II & Defense", credits: 3, type: "Thesis" },
          { code: "AHS-409", title: "Clinical Board Examination & Viva Voce", credits: 2, type: "Core" },
        ],
      ];

    case "business":
      return [
        [
          { code: "MGT-101", title: "Principles of Management", credits: 3, type: "Foundation" },
          { code: "ECO-101", title: "Microeconomics for Business", credits: 3, type: "Foundation" },
          { code: "MTH-101", title: "Business Mathematics", credits: 3, type: "Foundation" },
          { code: "ENG-101", title: "Business English I (Written Expression)", credits: 3, type: "General" },
          { code: "ISL-101", title: "Islamic Studies / Ethics", credits: 2, type: "General" },
        ],
        [
          { code: "ACC-101", title: "Financial Accounting I", credits: 3, type: "Core" },
          { code: "ECO-102", title: "Macroeconomics", credits: 3, type: "Foundation" },
          { code: "STA-101", title: "Business Statistics", credits: 3, type: "Foundation" },
          { code: "ENG-102", title: "Business Communication & Presentation", credits: 3, type: "General" },
          { code: "PAK-101", title: "Pakistan Studies & Regional Economy", credits: 2, type: "General" },
        ],
        [
          { code: "ACC-201", title: "Financial Accounting II", credits: 3, type: "Core" },
          { code: "MKT-201", title: "Principles of Marketing", credits: 3, type: "Core" },
          { code: "MGT-201", title: "Organizational Behavior", credits: 3, type: "Core" },
          { code: "MIS-201", title: "Management Information Systems", credits: 3, type: "Core" },
          { code: "SOC-101", title: "Introduction to Sociology / Psychology", credits: 3, type: "General" },
        ],
        [
          { code: "ACC-202", title: "Cost & Management Accounting", credits: 3, type: "Core" },
          { code: "MKT-202", title: "Marketing Management & Strategy", credits: 3, type: "Core" },
          { code: "FIN-201", title: "Business Finance Fundamentals", credits: 3, type: "Core" },
          { code: "LAW-201", title: "Business & Corporate Law", credits: 3, type: "General" },
          { code: "STA-202", title: "Inferential Statistics & Decision Making", credits: 3, type: "Foundation" },
        ],
        [
          { code: "FIN-301", title: "Financial Management", credits: 3, type: "Core" },
          { code: "HRM-301", title: "Human Resource Management", credits: 3, type: "Core" },
          { code: "MKT-301", title: "Consumer Behavior & Market Research", credits: 3, type: "Core" },
          { code: "OPS-301", title: "Operations & Supply Chain Management", credits: 3, type: "Core" },
          { code: "RES-301", title: "Business Research Methods", credits: 3, type: "Core" },
        ],
        [
          { code: "FIN-302", title: "Corporate Finance & Valuation", credits: 3, type: "Core" },
          { code: "IB-301", title: "International Business & Trade", credits: 3, type: "Core" },
          { code: "ELC-301", title: "Specialization Elective I", credits: 3, type: "Elective" },
          { code: "ELC-302", title: "Specialization Elective II", credits: 3, type: "Elective" },
          { code: "ETH-301", title: "Business Ethics & Corporate Governance", credits: 3, type: "General" },
        ],
        [
          { code: "MGT-401", title: "Strategic Management & Policy", credits: 3, type: "Core" },
          { code: "ENT-401", title: "Entrepreneurship & Small Business Incubation", credits: 3, type: "Core" },
          { code: "ELC-401", title: "Specialization Elective III", credits: 3, type: "Elective" },
          { code: "ELC-402", title: "Specialization Elective IV", credits: 3, type: "Elective" },
          { code: "PRJ-401", title: "Business Capstone Project I", credits: 3, type: "Thesis" },
        ],
        [
          { code: "PRJ-402", title: "Business Capstone Project II", credits: 3, type: "Thesis" },
          { code: "INT-401", title: "Corporate Summer Internship (6 Weeks)", credits: 3, type: "Internship" },
          { code: "MGT-402", title: "Total Quality Management", credits: 3, type: "Elective" },
          { code: "FIN-402", title: "Financial Modeling & FinTech Trends", credits: 3, type: "Elective" },
          { code: "VIV-401", title: "Comprehensive Departmental Viva Voce", credits: 2, type: "Core" },
        ],
      ];

    case "law":
      return [
        [
          { code: "LAW-101", title: "Introduction to Law & Legal Systems", credits: 3, type: "Core" },
          { code: "LAW-102", title: "Introduction to Jurisprudence", credits: 3, type: "Core" },
          { code: "ENG-101", title: "English I (Legal Comprehension)", credits: 3, type: "General" },
          { code: "ISL-101", title: "Islamic Studies / Ethics", credits: 2, type: "General" },
          { code: "POL-101", title: "Political Science I", credits: 3, type: "Foundation" },
        ],
        [
          { code: "LAW-103", title: "Legal System of Pakistan", credits: 3, type: "Core" },
          { code: "LAW-104", title: "Constitutional History of Pakistan", credits: 3, type: "Core" },
          { code: "ENG-102", title: "English II (Legal Drafting Fundamentals)", credits: 3, type: "General" },
          { code: "PAK-101", title: "Pakistan Studies", credits: 2, type: "General" },
          { code: "SOC-101", title: "Sociology of Law", credits: 3, type: "Foundation" },
        ],
        [
          { code: "LAW-201", title: "Islamic Jurisprudence I", credits: 3, type: "Core" },
          { code: "LAW-202", title: "Law of Contract I", credits: 3, type: "Core" },
          { code: "LAW-203", title: "Law of Torts I", credits: 3, type: "Core" },
          { code: "LAW-204", title: "Constitutional Law I (UK & US)", credits: 3, type: "Core" },
          { code: "HR-201", title: "Human Rights Law & International Conventions", credits: 3, type: "General" },
        ],
        [
          { code: "LAW-205", title: "Islamic Jurisprudence II", credits: 3, type: "Core" },
          { code: "LAW-206", title: "Law of Contract II & Sales of Goods", credits: 3, type: "Core" },
          { code: "LAW-207", title: "Law of Torts II & Consumer Protection", credits: 3, type: "Core" },
          { code: "LAW-208", title: "Constitutional Law II (Constitution of Pakistan 1973)", credits: 3, type: "Core" },
          { code: "ENV-201", title: "Environmental & Climate Change Law", credits: 3, type: "General" },
        ],
        [
          { code: "LAW-301", title: "Criminal Law I (General Principles)", credits: 3, type: "Core" },
          { code: "LAW-302", title: "Law of Property & Land Reforms", credits: 3, type: "Core" },
          { code: "LAW-303", title: "Equity & Specific Relief Act", credits: 3, type: "Core" },
          { code: "LAW-304", title: "Public International Law I", credits: 3, type: "Core" },
          { code: "LAW-305", title: "Administrative Law & Judicial Review", credits: 3, type: "Core" },
        ],
        [
          { code: "LAW-306", title: "Criminal Law II (Specific Offenses / PPC)", credits: 3, type: "Core" },
          { code: "LAW-307", title: "Commercial & Banking Law", credits: 3, type: "Core" },
          { code: "LAW-308", title: "Company Law & Corporate Practices", credits: 3, type: "Core" },
          { code: "LAW-309", title: "Public International Law II", credits: 3, type: "Core" },
          { code: "LAW-310", title: "Labor & Industrial Relations Laws", credits: 3, type: "Core" },
        ],
        [
          { code: "LAW-401", title: "Law of Evidence (Qanun-e-Shahadat) I", credits: 3, type: "Core" },
          { code: "LAW-402", title: "Criminal Procedure Code (CrPC) I", credits: 3, type: "Core" },
          { code: "LAW-403", title: "Civil Procedure Code (CPC) I", credits: 3, type: "Core" },
          { code: "LAW-404", title: "Legal Drafting & Conveyancing I", credits: 3, type: "Core" },
          { code: "LAW-405", title: "Cyber Law & Digital Evidence", credits: 3, type: "Elective" },
        ],
        [
          { code: "LAW-406", title: "Law of Evidence II", credits: 3, type: "Core" },
          { code: "LAW-407", title: "Criminal Procedure Code II", credits: 3, type: "Core" },
          { code: "LAW-408", title: "Civil Procedure Code II & Limitation Act", credits: 3, type: "Core" },
          { code: "LAW-409", title: "Legal Drafting & Pleadings II", credits: 3, type: "Core" },
          { code: "LAW-410", title: "Medical Jurisprudence & Forensic Science", credits: 3, type: "Elective" },
        ],
        [
          { code: "LAW-501", title: "Trial Advocacy & Court Procedures", credits: 3, type: "Core" },
          { code: "LAW-502", title: "Alternate Dispute Resolution (ADR) & Arbitration", credits: 3, type: "Core" },
          { code: "LAW-503", title: "Intellectual Property Laws", credits: 3, type: "Elective" },
          { code: "LAW-504", title: "Revenue Laws & Land Tenancy", credits: 3, type: "Elective" },
          { code: "LAW-505", title: "Professional Ethics & Bar Conduct", credits: 2, type: "Core" },
        ],
        [
          { code: "LAW-506", title: "Moot Court & Clinical Legal Education", credits: 4, type: "Lab" },
          { code: "LAW-507", title: "Legal Research Dissertation / Thesis", credits: 4, type: "Thesis" },
          { code: "LAW-508", title: "Taxation Laws & Fiscal Policies", credits: 3, type: "Elective" },
          { code: "LAW-509", title: "Judicial & Chamber Internship (8 Weeks)", credits: 3, type: "Internship" },
          { code: "LAW-510", title: "Comprehensive Departmental Viva Voce", credits: 2, type: "Core" },
        ],
      ];

    default:
      // Generic Natural / Social / Humanities Bachelor Breakdown
      return [
        [
          { code: "GEN-101", title: `Introduction to ${programName}`, credits: 3, type: "Foundation" },
          { code: "GEN-102", title: "Foundations of the Discipline I", credits: 3, type: "Core" },
          { code: "ENG-101", title: "Functional English", credits: 3, type: "General" },
          { code: "ISL-101", title: "Islamic Studies / Ethics", credits: 2, type: "General" },
          { code: "MTH-101", title: "Basic Quantitative Reasoning / Mathematics", credits: 3, type: "Foundation" },
        ],
        [
          { code: "GEN-103", title: "Foundations of the Discipline II", credits: 3, type: "Core" },
          { code: "GEN-104", title: "Disciplinary Laboratory / Practical I", credits: 2, type: "Lab" },
          { code: "ENG-102", title: "English II (Communication Skills)", credits: 3, type: "General" },
          { code: "PAK-101", title: "Pakistan Studies & Regional History", credits: 2, type: "General" },
          { code: "ICT-101", title: "Introduction to Computer Applications", credits: 3, type: "General" },
        ],
        [
          { code: "GEN-201", title: "Intermediate Theoretical Principles I", credits: 3, type: "Core" },
          { code: "GEN-202", title: "Core Disciplinary Concepts", credits: 3, type: "Core" },
          { code: "ENG-201", title: "Technical Writing & Presentation", credits: 3, type: "General" },
          { code: "STA-201", title: "Elementary Statistics & Data Analysis", credits: 3, type: "Foundation" },
          { code: "ELC-201", title: "Allied Social / Science Elective I", credits: 3, type: "Elective" },
        ],
        [
          { code: "GEN-203", title: "Intermediate Theoretical Principles II", credits: 3, type: "Core" },
          { code: "GEN-204", title: "Analytical Methods & Lab Work II", credits: 3, type: "Lab" },
          { code: "SOC-201", title: "Community Service & Social Responsibility", credits: 2, type: "General" },
          { code: "ELC-202", title: "Allied Social / Science Elective II", credits: 3, type: "Elective" },
          { code: "MGT-201", title: "Organizational Leadership & Dynamics", credits: 3, type: "General" },
        ],
        [
          { code: "GEN-301", title: "Advanced Theoretical Frameworks I", credits: 3, type: "Core" },
          { code: "GEN-302", title: "Advanced Methods & Techniques", credits: 3, type: "Core" },
          { code: "GEN-303", title: "Research Methodology & Survey Design", credits: 3, type: "Core" },
          { code: "ELC-301", title: "Major Elective Course I", credits: 3, type: "Elective" },
          { code: "ELC-302", title: "Major Elective Course II", credits: 3, type: "Elective" },
        ],
        [
          { code: "GEN-304", title: "Advanced Theoretical Frameworks II", credits: 3, type: "Core" },
          { code: "GEN-305", title: "Comparative Perspectives & Applied Studies", credits: 3, type: "Core" },
          { code: "ELC-303", title: "Major Elective Course III", credits: 3, type: "Elective" },
          { code: "ELC-304", title: "Major Elective Course IV", credits: 3, type: "Elective" },
          { code: "LAB-301", title: "Advanced Practical Seminar", credits: 2, type: "Lab" },
        ],
        [
          { code: "GEN-401", title: "Contemporary Issues & Modern Paradigms", credits: 3, type: "Core" },
          { code: "GEN-402", title: "Senior Seminar & Case Analyses", credits: 3, type: "Core" },
          { code: "PRJ-401", title: "Undergraduate Final Year Project / Thesis I", credits: 3, type: "Thesis" },
          { code: "ELC-401", title: "Specialization Elective Course V", credits: 3, type: "Elective" },
          { code: "INT-401", title: "Fieldwork / Summer Internship", credits: 2, type: "Internship" },
        ],
        [
          { code: "GEN-403", title: "Professional Ethics & Standards", credits: 3, type: "General" },
          { code: "PRJ-402", title: "Undergraduate Final Year Project / Thesis II & Defense", credits: 3, type: "Thesis" },
          { code: "ELC-402", title: "Specialization Elective Course VI", credits: 3, type: "Elective" },
          { code: "ENT-401", title: "Entrepreneurship & Career Development", credits: 3, type: "General" },
          { code: "VIV-401", title: "Comprehensive Departmental Viva Voce", credits: 2, type: "Core" },
        ],
      ];
  }
}

function getMasterScheme(programName: string): ProgramSemester[] {
  return [
    {
      semesterNumber: 1,
      semesterName: "Semester 1",
      totalCredits: 9,
      courses: [
        { code: "MS-701", title: `Advanced Research Methodology in ${programName}`, credits: 3, type: "Core" },
        { code: "MS-702", title: "Core Theoretical Foundations & Epistemology", credits: 3, type: "Core" },
        { code: "MS-703", title: "Advanced Quantitative & Statistical Tools", credits: 3, type: "Core" },
      ],
    },
    {
      semesterNumber: 2,
      semesterName: "Semester 2",
      totalCredits: 9,
      courses: [
        { code: "MS-704", title: "Specialized Advanced Elective I", credits: 3, type: "Elective" },
        { code: "MS-705", title: "Specialized Advanced Elective II", credits: 3, type: "Elective" },
        { code: "MS-706", title: "Graduate Research Seminar & Literature Synthesis", credits: 3, type: "Core" },
      ],
    },
    {
      semesterNumber: 3,
      semesterName: "Semester 3",
      totalCredits: 6,
      courses: [
        { code: "MS-707", title: "MS/MPhil Dissertation Proposal Defense", credits: 3, type: "Thesis" },
        { code: "MS-708", title: "Thesis Research & Investigation Part I", credits: 3, type: "Thesis" },
      ],
    },
    {
      semesterNumber: 4,
      semesterName: "Semester 4",
      totalCredits: 6,
      courses: [
        { code: "MS-709", title: "Thesis Research & Investigation Part II", credits: 3, type: "Thesis" },
        { code: "MS-710", title: "Final Thesis Evaluation & Public Defense", credits: 3, type: "Thesis" },
      ],
    },
  ];
}

function getPhdScheme(programName: string): ProgramSemester[] {
  return [
    {
      semesterNumber: 1,
      semesterName: "Semester 1",
      totalCredits: 9,
      courses: [
        { code: "PHD-801", title: `Doctoral Seminar on Advanced Paradigms in ${programName}`, credits: 3, type: "Core" },
        { code: "PHD-802", title: "Advanced Qualitative & Quantitative Research Design", credits: 3, type: "Core" },
        { code: "PHD-803", title: "Doctoral Specialized Elective I", credits: 3, type: "Elective" },
      ],
    },
    {
      semesterNumber: 2,
      semesterName: "Semester 2",
      totalCredits: 9,
      courses: [
        { code: "PHD-804", title: "Doctoral Specialized Elective II", credits: 3, type: "Elective" },
        { code: "PHD-805", title: "Independent Directed Study & Literature Meta-Analysis", credits: 3, type: "Core" },
        { code: "PHD-806", title: "Comprehensive Examination (Written & Oral)", credits: 3, type: "Core" },
      ],
    },
    {
      semesterNumber: 3,
      semesterName: "Semester 3",
      totalCredits: 6,
      courses: [
        { code: "PHD-807", title: "Doctoral Dissertation Proposal Defense (Synopsis)", credits: 3, type: "Thesis" },
        { code: "PHD-808", title: "Empirical Fieldwork & Experimental Investigation I", credits: 3, type: "Thesis" },
      ],
    },
    {
      semesterNumber: 4,
      semesterName: "Semester 4",
      totalCredits: 6,
      courses: [
        { code: "PHD-809", title: "Experimental Investigation & Advanced Data Analysis II", credits: 3, type: "Thesis" },
        { code: "PHD-810", title: "Doctoral Research Progress Review Seminar", credits: 3, type: "Thesis" },
      ],
    },
    {
      semesterNumber: 5,
      semesterName: "Semester 5",
      totalCredits: 6,
      courses: [
        { code: "PHD-811", title: "Dissertation Manuscript Writing & Synthesis", credits: 3, type: "Thesis" },
        { code: "PHD-812", title: "HEC-Recognized Journal Publication Requirement", credits: 3, type: "Thesis" },
      ],
    },
    {
      semesterNumber: 6,
      semesterName: "Semester 6",
      totalCredits: 6,
      courses: [
        { code: "PHD-813", title: "International External Evaluation Clearance", credits: 3, type: "Thesis" },
        { code: "PHD-814", title: "Final Dissertation Public Defense & Viva Voce", credits: 3, type: "Thesis" },
      ],
    },
  ];
}

export function getProgramDetails(program: ProgramItem): ProgramDetailRecord {
  const normLevel = program.level.toLowerCase();
  const isPhd = normLevel.includes("phd");
  const isMaster = normLevel.includes("ms") || normLevel.includes("m.phil") || normLevel.includes("mphil") || normLevel.includes("master");
  const isLaw = program.name.toLowerCase().includes("llb");

  const discipline = detectDiscipline(program.name, program.departmentId);

  // Snapshot configuration
  const duration = isPhd
    ? "3 - 5 Years (6 - 10 Semesters)"
    : isMaster
    ? "2 Years (4 Semesters)"
    : isLaw
    ? "5 Years (10 Semesters)"
    : "4 Years (8 Semesters)";

  const totalSemesters = isPhd ? "6 Semesters (Coursework + Thesis)" : isMaster ? "4 Semesters" : isLaw ? "10 Semesters" : "8 Semesters";

  const creditHours = isPhd
    ? "18 Coursework + 30 Thesis Cr"
    : isMaster
    ? "30 – 36 Credit Hours"
    : isLaw
    ? "166 Credit Hours"
    : "130 – 136 Credit Hours";

  const degreeLevel = isPhd
    ? "Doctoral (PhD)"
    : isMaster
    ? "Postgraduate (MS/MPhil)"
    : isLaw
    ? "Professional (5-Year LLB)"
    : "Undergraduate (BS)";

  // Scheme of Studies
  let schemeOfStudies: ProgramSemester[];
  if (isPhd) {
    schemeOfStudies = getPhdScheme(program.name);
  } else if (isMaster) {
    schemeOfStudies = getMasterScheme(program.name);
  } else {
    const rawSemesters = getDisciplineCourses(discipline, program.name);
    schemeOfStudies = rawSemesters.map((courses, idx) => ({
      semesterNumber: idx + 1,
      semesterName: `Semester ${idx + 1}`,
      totalCredits: courses.reduce((acc, c) => acc + c.credits, 0),
      courses,
    }));
  }

  // Eligibility configuration
  let academicRequirement = "";
  let minimumMarks = "";
  let criteriaDetails: string[] = [];
  let entryRequirements: string[] = [];

  if (isPhd) {
    academicRequirement = "MS / M.Phil (18 Years of Education) with Thesis in relevant or allied discipline from an HEC-recognized university.";
    minimumMarks = "Minimum CGPA 3.00 out of 4.00 (in Semester System) or 60% marks (in Annual System).";
    criteriaDetails = [
      "MS / M.Phil degree with completed research thesis in the relevant field.",
      "GAT-Subject / GRE Subject or University of Swat Departmental Screening Test with minimum 60% cumulative score.",
      "Comprehensive Statement of Purpose / Research Proposal outlining proposed doctoral research topic.",
      "Interview before the Departmental Doctoral Admissions Committee.",
    ];
    entryRequirements = [
      "Attested copies of all Academic Degrees, Transcripts & Equivalence Certificate (if foreign).",
      "Valid GAT / GRE Subject score report card.",
      "Two letters of academic recommendation from professors familiar with applicant's work.",
      "No Objection Certificate (NOC) from employer (for in-service candidates).",
    ];
  } else if (isMaster) {
    academicRequirement = "BS (4-Year) / M.Sc (16 Years of Education) in the relevant or closely related discipline from an HEC-recognized institution.";
    minimumMarks = "Minimum CGPA 2.50 out of 4.00 (in Semester System) or 50% marks (in Annual System).";
    criteriaDetails = [
      "16 years of education in the relevant discipline with an accredited academic record.",
      "GAT-General (NTS) / University of Swat Departmental Admission Test with at least 50% qualifying score.",
      "Merit-based admission interview evaluating conceptual knowledge and research aptitude.",
    ];
    entryRequirements = [
      "Attested copies of SSC, HSSC, and BS/M.Sc degrees and detailed mark certificates.",
      "Valid GAT-General score card or UoS entry test receipt.",
      "Character certificate from the institution last attended.",
      "Domicile certificate and CNIC/Form-B.",
    ];
  } else if (isLaw) {
    academicRequirement = "Intermediate (F.A / F.Sc / ICS / A-Levels or equivalent examination from an authorized BISE).";
    minimumMarks = "Minimum 45% marks in Intermediate (or equivalent) examination.";
    criteriaDetails = [
      "Valid Law Admission Test (LAT) score conducted by the Higher Education Commission (HEC) with minimum 50% marks as mandated by the Supreme Court of Pakistan.",
      "Open to male and female students meeting academic merit benchmarks.",
      "Departmental screening interview and merit calculation (Matric 20% + Inter 30% + LAT 50%).",
    ];
    entryRequirements = [
      "Higher Education Commission (HEC) LAT Result Card.",
      "Attested copies of Matric and Intermediate mark sheets and certificates.",
      "Domicile Certificate, CNIC / B-Form, and 4 passport-size photographs.",
    ];
  } else {
    // Standard BS Undergraduate
    if (discipline === "computing") {
      academicRequirement = "Intermediate (F.Sc Pre-Engineering, Pre-Medical with Additional Math, ICS, or General Science with Math) or 3-year DAE in relevant technology from a recognized board.";
      minimumMarks = "Minimum 50% marks in Intermediate (or equivalent).";
    } else if (discipline === "health") {
      academicRequirement = "F.Sc Pre-Medical (Physics, Chemistry, Biology) or equivalent qualification from an accredited BISE / board.";
      minimumMarks = "Minimum 50% marks in F.Sc Pre-Medical.";
    } else if (discipline === "physics" || discipline === "mathematics" || discipline === "geology") {
      academicRequirement = "F.Sc Pre-Engineering / General Science with Mathematics and Physics (or equivalent) with minimum 45% marks.";
      minimumMarks = "Minimum 45% marks in Intermediate.";
    } else {
      academicRequirement = "Intermediate (FA, F.Sc, ICS, I.Com or equivalent examination from an authorized board).";
      minimumMarks = "Minimum 45% marks in Intermediate.";
    }
    criteriaDetails = [
      "Selection purely on open merit computed through academic weightage: Matriculation (40%) + Intermediate (60%).",
      "Departmental verification of eligibility and subject-specific prerequisites.",
      "Quota reservations applicable as per KP Higher Education Department and University regulations.",
    ];
    entryRequirements = [
      "Original & attested copies of Secondary School Certificate (SSC) and Detailed Marks Certificate.",
      "Original & attested copies of Higher Secondary School Certificate (HSSC) / Hope Certificate.",
      "Domicile Certificate of candidate / father.",
      "Computerized National Identity Card (CNIC) or Form-B.",
      "Six passport-size photographs with blue/white background.",
    ];
  }

  // Quotas & Enrollment
  const annualSeats = isPhd ? 15 : isMaster ? 30 : 60;
  const quotas = [
    { category: "Open Merit", description: "Direct merit-based allocation for candidates across Pakistan.", percentage: "85%" },
    { category: "Merged Districts (FATA)", description: "Reserved seats for tribal / merged districts candidates.", percentage: "5%" },
    { category: "Baluchistan Quota", description: "Special quota seats reserved for students from Baluchistan.", percentage: "2%" },
    { category: "Sports Quota", description: "Allocated for recognized athletes and provincial/national sports achievers.", percentage: "2%" },
    { category: "Persons with Disabilities", description: "Reserved seats for physically challenged candidates with verification.", percentage: "2%" },
    { category: "Hafiz-e-Quran / Minorities", description: "Additional merit points for Hafiz-e-Quran and reserved seats for religious minorities.", percentage: "4%" },
  ];

  // Learning Outcomes
  const learningOutcomes: LearningOutcome[] = [
    {
      title: "Core Foundational Mastery",
      description: `Acquire an exhaustive theoretical and empirical grounding in the core principles of ${program.name}, establishing rigorous conceptual frameworks.`,
      category: "Knowledge",
    },
    {
      title: "Technical & Practical Competence",
      description: "Demonstrate high-level technical aptitude, modern laboratory proficiency, scientific instrumentation, and digital tools relevant to the discipline.",
      category: "Technical",
    },
    {
      title: "Critical Inquiry & Problem Formulation",
      description: "Formulate innovative, evidence-based solutions for intricate academic, industrial, and societal challenges through rigorous analytical reasoning.",
      category: "Analysis",
    },
    {
      title: "Ethical Responsibility & Professional Integrity",
      description: "Uphold the highest standards of professional ethics, academic honesty, social accountability, environmental stewardship, and institutional teamwork.",
      category: "Ethics",
    },
    {
      title: "Scholarly Research & Lifelong Progression",
      description: "Cultivate investigative methodologies, scholarly writing capabilities, and lifelong learning attitudes necessary for high-impact postgraduate pursuits.",
      category: "Research",
    },
  ];

  // Career Prospects
  let sectors: string[] = [];
  let roles: string[] = [];
  let higherStudies = "";

  if (discipline === "computing") {
    sectors = ["Software Development Companies", "Artificial Intelligence & Data Labs", "Fintech & Banking Systems", "Telecommunications & Cloud Providers", "Public Sector Digital Initiatives"];
    roles = ["Software Engineer", "Full-Stack Developer", "AI / Machine Learning Specialist", "Data Analyst & Engineer", "Cloud Solutions Architect", "Cybersecurity Analyst"];
    higherStudies = "Seamless qualification for MS/MPhil & PhD Computer Science, Data Science, and Software Engineering at leading domestic universities and international scholarship schemes.";
  } else if (discipline === "physics") {
    sectors = ["Nuclear Research & Energy Organizations (PAEC, NESCOM, KRL)", "Semiconductor & Nanotechnology Labs", "Meteorological & Space Exploration Agencies (SUPARCO)", "Higher Education & Academia", "Medical Physics & Diagnostic Centers"];
    roles = ["Research Physicist", "Medical Physicist / Radiation Specialist", "Laboratory Scientific Officer", "Data Scientist", "Lecturer / Assistant Professor", "Acoustics & Optics Specialist"];
    higherStudies = "Direct pathway into MS/PhD Physics, Materials Science, Applied Photonics, and prestigious international fellowships (Erasmus, Fulbright, DAAD).";
  } else if (discipline === "health") {
    sectors = ["Teaching & Tertiary Care Hospitals", "Diagnostic Pathology & Imaging Laboratories", "Pharmaceutical & Biotechnology Companies", "Public Health Directorates & WHO Initiatives", "Medical Device & Instrumentation Firms"];
    roles = ["Clinical Laboratory Technologist", "Hospital Lab Supervisor", "Diagnostic Healthcare Officer", "Quality Assurance Analyst", "Research Associate in Biomedical Studies", "Health Policy Specialist"];
    higherStudies = "Eligible for specialized M.Phil in Allied Health Sciences, Molecular Pathology, Public Health (MPH), and clinical fellowships.";
  } else if (discipline === "business") {
    sectors = ["Commercial & Investment Banks", "Multinational FMCG Corporations", "Management Consultancies", "Financial Auditing Firms", "Public Enterprise & Trade Authorities", "Technology Startups"];
    roles = ["Business Development Manager", "Financial Analyst", "Marketing Strategist", "Human Resource Executive", "Supply Chain Coordinator", "Operations Consultant"];
    higherStudies = "Direct qualification for MBA, MS Management Sciences, specialized M.Sc Finance, and professional certifications (CFA, ACCA, PMP).";
  } else if (discipline === "law") {
    sectors = ["Judicial Services & Courts of Law", "Advocacy & Corporate Legal Firms", "Government Legal Departments & Ministries", "International Human Rights Organizations (UN, Amnesty)", "Corporate Compliance & In-House Counsel"];
    roles = ["Advocate / Legal Counsel", "Civil Judge / Judicial Magistrate", "Corporate Legal Advisor", "Public Prosecutor", "Human Rights Officer", "Legal Researcher"];
    higherStudies = "Eligible for Bar-at-Law, LL.M (Master of Laws) in Constitutional, Corporate, or International Law at prestigious international universities.";
  } else {
    sectors = ["Federal & Provincial Civil Services (CSS / PMS)", "Higher Secondary & University Education", "Research Institutes & Think Tanks", "Non-Governmental Organizations & Development Sector", "Corporate & Media Enterprises"];
    roles = ["Subject Specialist / Lecturer", "Research Analyst", "Public Relations & Communications Officer", "Project Coordinator", "Policy Researcher", "Administrative Officer"];
    higherStudies = "Fully prepares graduates for advanced MS/M.Phil degrees, competitive civil service exams (CSS, PMS), and international Master's scholarships.";
  }

  const overview = `The ${program.name} program at the University of Swat is an intellectually rigorous academic degree designed to cultivate profound knowledge, critical problem-solving skills, and practical capabilities in students. Offered by the ${program.departmentName} within the ${program.faculty}, the program combines theoretical depth with modern experimental, analytical, and professional competencies. Students benefit from access to well-equipped facilities, highly qualified faculty researchers, and a vibrant learning ecosystem at the Main Campus in Charbagh, Swat. The curriculum strictly complies with Higher Education Commission (HEC) policies and aligns with contemporary global industry and academic standards.`;

  return {
    slug: program.slug,
    name: program.name,
    departmentId: program.departmentId,
    departmentName: program.departmentName,
    departmentHref: program.departmentHref,
    departmentImage: program.departmentImage,
    faculty: program.faculty,
    curriculum: program.curriculum,
    overview,
    snapshot: {
      degreeLevel,
      duration,
      totalSemesters,
      creditHours,
      studyMode: "Full-Time (Morning Regular)",
      medium: "English",
      awardingBody: "University of Swat (HEC Recognized)",
      campus: program.departmentName.includes("Women Campus") ? "Women Campus, Swat" : "Main Campus, Charbagh",
      intakeSchedule: "Fall Semester (Aug/Sep) & Spring (Feb)",
      accreditation: "HEC Pakistan & Respective Statutory Accreditation Councils",
    },
    enrollment: {
      annualSeats,
      admissionStatus: "Upcoming Intake (Fall 2026)",
      sessionLabel: "Academic Year 2026 – 2027",
      quotas,
      applicationMode: "Online via University of Swat Admission Portal (uswat.edu.pk/admissions) & Directorate of Admissions.",
      hostelTransport: "Separate on-campus male and female hostels at the Main Campus, Charbagh. Extensive university bus transport network spanning Swat Valley.",
    },
    eligibility: {
      academicRequirement,
      minimumMarks,
      criteriaDetails,
      entryRequirements,
      ageLimit: isPhd || isMaster ? "No upper age restriction for postgraduate admissions." : "Maximum 25 years at the application deadline (relaxable under KP government rules).",
    },
    learningOutcomes,
    schemeOfStudies,
    careerProspects: {
      sectors,
      roles,
      higherStudies,
      industryPartnerships: "Collaborative linkages with national research laboratories, corporate institutions, and public sector organizations across Khyber Pakhtunkhwa and Pakistan.",
    },
  };
}
