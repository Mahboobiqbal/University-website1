export type AdministrationCategory = "Offices" | "Directorates" | "Units & Boards";

export interface AdministrationEntry {
  slug: string;
  label: string;
  category: AdministrationCategory;
  summary: string;
  responsibilities: string[];
  officer?: {
    name: string;
    title: string;
    image: string;
    email?: string;
  };
  staff?: string[];
  message?: string[];
  contact?: {
    email?: string;
    phone?: string;
  };
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
    officer: {
      name: "Prof. Dr. Husnul Amin",
      title: "Vice Chancellor",
      image: "/uos/administration/vc.jpg",
      email: "vc@uswat.edu.pk",
    },
    staff: ["University Secretariat Staff"],
    contact: { email: "vc@uswat.edu.pk" },
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
    officer: {
      name: "Prof. Dr. Muhammad Qasim",
      title: "Pro Vice Chancellor",
      image: "/uos/administration/pro-vc.jpg",
    },
    message: [
      "At the University of Swat, we are committed to creating a transformative educational environment for our students and faculty.",
      "The Office of the Pro Vice Chancellor stands at the intersection of strategy and service, working diligently to support academic growth, uphold institutional values, and enhance our regional and global impact.",
    ],
    contact: { phone: "+92 946-730510" },
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
    officer: {
      name: "Dr. Arshad Ali Khan",
      title: "Registrar",
      image: "/uos/administration/registrar.jpg",
      email: "registrar@uswat.edu.pk",
    },
    staff: ["Mr. Tariq Kamal — Deputy Registrar (Establishment)", "Mr. Sadiq Ahmed — Deputy Registrar (Academics)", "Mr. Asghar Khan — PS to Registrar"],
    message: [
      "We look forward to achieving excellence in imparting quality teaching and skills, promoting research culture, and developing an ideal industry-academia linkage programme.",
      "Students and faculty form the backbone of our university. We shall work with dedication, devotion, and commitment in an atmosphere of mutual trust, unity, discipline, and respect for one another.",
    ],
    contact: { email: "pstoregistrar@uswat.edu.pk", phone: "0946-920859" },
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
    officer: {
      name: "Mr. Mahboob Ur Rahman",
      title: "Treasurer",
      image: "/uos/administration/treasurer.jpg",
      email: "mahboob@uswat.edu.pk",
    },
    staff: ["Mr. Muhammad Khalid — Additional Treasurer", "Mr. Amjad Iqbal — Deputy Treasurer / Director Accounts", "Mr. Arshad Hussain — Deputy Director Audit", "Mr. Shahab Khan — Deputy Treasurer", "Mr. Mansoor Ahmad — Superintendent", "Mr. Shoukat Ali — Store Officer", "Mr. Rahmanullah — Student Accounts Advisor", "Mr. Ziaul Haq — Junior Clerk", "Mr. Yousuf Haroon — Junior Clerk", "Mr. Bacha Hussain — Senior Clerk"],
    contact: { email: "pstotreasurer@uswat.edu.pk", phone: "0946-920857" },
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
    officer: {
      name: "Aziz ur Rehman",
      title: "Controller of Examinations",
      image: "/uos/administration/controller.jpg",
      email: "aziz@uswat.edu.pk",
    },
    staff: ["Fayyaz Ahmed Khan — Additional Controller of Examinations", "Shah Hussain — Deputy Controller of Examinations", "Akhunzada Amir Faraz — Assistant Controller (Secrecy & Degree)", "Mr. Muhammad Imran — Assistant Controller of Examinations", "Mehboob Alam — Senior Clerk"],
    contact: { email: "controller@uswat.edu.pk", phone: "0946-920831" },
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
    officer: {
      name: "Dr. Muhammad Imad Khan",
      title: "Provost & In-charge Guest House",
      image: "/uos/administration/provost.jpg",
      email: "provost@uswat.edu.pk",
    },
    staff: ["Mr. Shahid Khan — Additional Provost", "Dr. Mahrukh Anum — Warden Girls Hostel", "Dr. Akhtar Rasool — Warden Boys Hostel", "Dr. Neelam Akbar Marwat — Deputy Provost", "Ms. Rohi Naz — Warden Female Hostel", "Mr. Fazal Rahman — Office Assistant"],
    contact: { email: "provost@uswat.edu.pk" },
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
    officer: {
      name: "Dr. Umar Hayat",
      title: "Director",
      image: "/uos/administration/financial-aid.jpg",
      email: "umarhayat@uswat.edu.pk",
    },
    staff: ["Mr. Khurshid Alam — Manager, Advancement and Financial Aid", "Mr. Muhammad Kaleem — Computer Operator"],
  },
  {
    slug: "directorate-of-administration",
    label: "Directorate of Administration",
    category: "Offices",
    summary:
      "The Directorate of Administration coordinates institutional administration and support services across the University.",
    responsibilities: [
      "Coordination of university administrative support services",
      "Facilitation of administrative processes and office operations",
      "Liaison with academic and administrative units",
      "Support for institutional governance and administration",
    ],
    officer: {
      name: "Prof. Dr. Hazrat Bilal",
      title: "Director Administration",
      image: "/uos/administration/director-admin.jpg",
      email: "ao@uswat.edu.pk",
    },
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
    contact: { email: "works@uswat.edu.pk", phone: "0946-730505" },
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
    staff: ["Dr. Kefayat Ullah — Chief Proctor", "Dr. Arshad Iqbal — Deputy Chief Proctor", "Mr. Islahudin — Deputy Chief Proctor", "Ms. Rohi Naz — Deputy Chief Proctor", "Ms. Shazia — Deputy Chief Proctor"],
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
    slug: "directorate-of-research-technological-development",
    label: "Directorate of Research & Technological Development",
    category: "Directorates",
    summary:
      "The Directorate of Research and Technological Development strengthens research, innovation, and technological awareness across the University's academic units.",
    responsibilities: [
      "Strengthening research at the academic level",
      "Promoting quality research and technological development",
      "Coordinating funding and research support",
      "Facilitating publication and presentation of university research",
      "Preparing and disseminating annual research progress reports",
    ],
    officer: {
      name: "Dr. Ahmad Ali",
      title: "Director",
      image: "/uos/administration/research.jpg",
    },
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
  {
    slug: "central-library",
    label: "Central Library",
    category: "Units & Boards",
    summary:
      "The Central Library provides information resources, research support, and study services to students and faculty.",
    responsibilities: [
      "Managing print and digital library collections",
      "Providing research and reference support",
      "Supporting student and faculty information needs",
      "Maintaining library services and study facilities",
    ],
    officer: {
      name: "Dr. Wajid Rashid",
      title: "Librarian",
      image: "/uos/administration/librarian.jpg",
      email: "wajid@uswat.edu.pk",
    },
    staff: ["Mr. Muhammad Salman Raziq — Library Assistant", "Mr. Painda Mand — Library Assistant", "Mr. Fazal Rabbi — Senior Library Attendant"],
    contact: { email: "librarian@uswat.edu.pk" },
  },
];

export function getAdministrationEntry(slug: string): AdministrationEntry | undefined {
  return ADMINISTRATION_ENTRIES.find((entry) => entry.slug === slug);
}
