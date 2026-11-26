export type AdministrationCategory = "Offices" | "Directorates" | "Units & Boards";

export interface AdministrationEntry {
  slug: string;
  label: string;
  category: AdministrationCategory;
  summary: string;
  responsibilities: string[];
}

export const ADMINISTRATION_ENTRIES: AdministrationEntry[] = [
  {
    slug: "vc-secretariat",
    label: "VC Secretariat",
    category: "Offices",
    summary:
      "The Vice Chancellor's Secretariat coordinates the official correspondence, scheduling, and executive affairs of the University.",
    responsibilities: [
      "Handling official correspondence addressed to the Vice Chancellor",
      "Coordinating the Vice Chancellor's schedule, visits, and engagements",
      "Following up on decisions of the Syndicate, Academic Council, and other statutory bodies",
      "Liaison between the Vice Chancellor and university departments",
    ],
  },
  {
    slug: "pro-vc",
    label: "Pro-VC",
    category: "Offices",
    summary:
      "The Office of the Pro-Vice Chancellor supports the Vice Chancellor in academic and administrative oversight of the University.",
    responsibilities: [
      "Assisting the Vice Chancellor in academic and administrative matters",
      "Overseeing quality assurance across faculties and departments",
      "Coordinating inter-departmental initiatives and reporting",
      "Acting for the Vice Chancellor when required",
    ],
  },
  {
    slug: "registrar",
    label: "Registrar",
    category: "Offices",
    summary:
      "The Registrar's Office manages university records, admissions documentation, and statutory student services.",
    responsibilities: [
      "Maintenance of university records and official registers",
      "Processing of admissions, transfers, and student documentation",
      "Coordination of Syndicate and Academic Council meetings",
      "Issuance of official certificates and verification letters",
    ],
  },
  {
    slug: "treasurer",
    label: "Treasurer",
    category: "Offices",
    summary:
      "The Treasurer's Office oversees the financial affairs, budgets, and accounts of the University.",
    responsibilities: [
      "Preparation and monitoring of the university budget",
      "Management of accounts, payments, and financial reporting",
      "Custody of university funds and financial records",
      "Coordination with internal and external auditors",
    ],
  },
  {
    slug: "controller-of-examination",
    label: "Controller of Examination",
    category: "Offices",
    summary:
      "The Controller of Examinations conducts and supervises all university examinations, results, and transcripts.",
    responsibilities: [
      "Scheduling and conduct of semester and annual examinations",
      "Preparation and declaration of results",
      "Issuance of transcripts, degrees, and result cards",
      "Ensuring academic integrity of the examination process",
    ],
  },
  {
    slug: "public-relations",
    label: "Public Relations",
    category: "Offices",
    summary:
      "The Public Relations Office manages the University's communication with the media, public, and community stakeholders.",
    responsibilities: [
      "Releasing official statements, notices, and press material",
      "Managing media relations and coverage of university events",
      "Maintaining the university's public information channels",
      "Coordinating community outreach and public awareness activities",
    ],
  },
  {
    slug: "provost",
    label: "Provost",
    category: "Offices",
    summary:
      "The Provost's Office oversees student hostels, residential facilities, and student welfare on campus.",
    responsibilities: [
      "Administration of male and female student hostels",
      "Allocation and maintenance of residential facilities",
      "Welfare and disciplinary matters of resident students",
      "Coordination with student representative bodies",
    ],
  },
  {
    slug: "university-advancement-financial-aid",
    label: "University Advancement & Financial Aid",
    category: "Offices",
    summary:
      "This office develops alumni and donor relations and administers scholarships, fee concessions, and financial aid for students.",
    responsibilities: [
      "Administering scholarships, stipends, and need-based financial aid",
      "Processing fee concession and merit award applications",
      "Building relationships with alumni, donors, and partner organizations",
      "Fundraising and advancement initiatives for the University",
    ],
  },
  {
    slug: "it",
    label: "IT",
    category: "Directorates",
    summary:
      "The Directorate of IT operates the University's networks, systems, and digital services for students and staff.",
    responsibilities: [
      "Operation and maintenance of campus networks and internet",
      "Support for the Campus Management System (CMS) and portals",
      "University email, websites, and digital services",
      "IT security, helpdesk, and technical support",
    ],
  },
  {
    slug: "sports",
    label: "Sports",
    category: "Directorates",
    summary:
      "The Directorate of Sports organizes athletic programs, facilities, and inter-university competitions.",
    responsibilities: [
      "Management of sports grounds, courts, and facilities",
      "Organizing inter-departmental and inter-university competitions",
      "Training and selection of university teams",
      "Promoting fitness and recreational activities on campus",
    ],
  },
  {
    slug: "planning-development",
    label: "Planning & Development",
    category: "Directorates",
    summary:
      "The Directorate of Planning & Development coordinates strategic planning, development projects, and institutional growth.",
    responsibilities: [
      "Preparing the university's annual and strategic development plans",
      "Managing development projects and physical expansion",
      "Monitoring performance against set targets",
      "Coordination with HEC and funding agencies on development schemes",
    ],
  },
  {
    slug: "works",
    label: "Works",
    category: "Directorates",
    summary:
      "The Works Directorate manages construction, maintenance, and repair of university buildings and infrastructure.",
    responsibilities: [
      "Construction and renovation of campus buildings",
      "Preventive and corrective maintenance of facilities",
      "Supervision of contractors and service providers",
      "Campus utilities, safety, and infrastructure upkeep",
    ],
  },
  {
    slug: "proctorial-board",
    label: "Proctorial Board",
    category: "Units & Boards",
    summary:
      "The Proctorial Board maintains discipline and student conduct across the University.",
    responsibilities: [
      "Monitoring student discipline and code of conduct",
      "Handling disciplinary cases and student complaints",
      "Coordination with departmental proctors",
      "Organizing orientation on student rules and regulations",
    ],
  },
  {
    slug: "ydc",
    label: "YDC",
    category: "Units & Boards",
    summary:
      "The Youth Development Centre (YDC) supports student development through volunteering, leadership, and community engagement programs.",
    responsibilities: [
      "Running volunteering and community service programs",
      "Leadership and capacity-building workshops for students",
      "Coordination of student clubs and societies",
      "Career and personal development activities",
    ],
  },
  {
    slug: "media-cell",
    label: "Media Cell",
    category: "Units & Boards",
    summary:
      "The Media Cell produces and shares university news, announcements, and stories through official channels.",
    responsibilities: [
      "Publishing university news, notices, and announcements",
      "Producing content for the university website and social media",
      "Covering campus events, ceremonies, and achievements",
      "Supporting journalists and media inquiries",
    ],
  },
];

export function getAdministrationEntry(slug: string): AdministrationEntry | undefined {
  return ADMINISTRATION_ENTRIES.find((entry) => entry.slug === slug);
}
