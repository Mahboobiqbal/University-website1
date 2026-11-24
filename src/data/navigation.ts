const IMAGES_PLACEHOLDER = {
  about: "https://images.pexels.com/photos/3754756/pexels-photo-3754756.jpeg?auto=compress&cs=tinysrgb&w=800",
  academics: "https://images.pexels.com/photos/3184285/pexels-photo-3184285.jpeg?auto=compress&cs=tinysrgb&w=800",
  research: "https://images.pexels.com/photos/669623/pexels-photo-669623.jpeg?auto=compress&cs=tinysrgb&w=800",
  admin: "https://images.pexels.com/photos/4332341/pexels-photo-4332341.jpeg?auto=compress&cs=tinysrgb&w=800",
  studentLife: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
};

export const NAVIGATION = {
  topBar: {
    links: [
      { label: "Newsroom", href: "/news" },
      { label: "Events", href: "/events" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
    actions: [
      { label: "Apply Now", href: "/apply" },
      { label: "Faculty Login", href: "http://cms1.uswat.edu.pk/", external: true },
      { label: "Student Login", href: "http://cms1.uswat.edu.pk/", external: true },
    ],
    highContrastLabel: "Toggle High Contrast",
    searchLabel: "Search",
    languageLabel: "English / \u0627\u0631\u062f\u0648",
  },
  main: [
    {
      label: "About",
      href: "/about",
      mega: {
        columns: [
          {
            heading: "About University",
            links: [
              { label: "About University", href: "/about" },
              { label: "Vice Chancellor's Message", href: "/vice-chancellor" },
              { label: "Affiliated Colleges", href: "/about" },
              { label: "Campuses", href: "/campuses" },
              { label: "Contact List", href: "/contact" },
            ],
          },
          {
            heading: "Affiliated Colleges",
            links: [
              { label: "Public Sector Affiliated Colleges", href: "/about" },
              { label: "Private Sector Affiliated Colleges", href: "/about" },
            ],
          },
          {
            heading: "Contact",
            links: [
              { label: "Main Campus Charbagh", href: "/campuses" },
              { label: "Women Campus", href: "/campuses" },
              { label: "Contact List", href: "/contact" },
            ],
          },
        ],
        promo: {
          image: IMAGES_PLACEHOLDER.about,
          title: "About University of Swat",
          text: "Established in 2010, the University of Swat provides quality and relevant education to the people of Swat Valley and beyond.",
          button: "Learn More",
          href: "/about",
        },
      },
    },
    {
      label: "Academics",
      href: "/academics",
      mega: {
        columns: [
          {
            heading: "Religious, Languages, Humanities & Legal Studies",
            links: [
              { label: "English & Foreign Languages", href: "/department/english-foreign-languages" },
              { label: "Islamic & Arabic Studies", href: "/department/islamic-arabic-studies" },
              { label: "Pashto & Local Languages", href: "/department/pashto-local-languages" },
              { label: "Law & Shariah", href: "/department/law-shariah" },
              { label: "Urdu", href: "/department/urdu" },
            ],
          },
          {
            heading: "Physical, Numerical & Computational Sciences",
            links: [
              { label: "Physics", href: "/department/physics" },
              { label: "Computer & Software Technology", href: "/department/computer-software-technology" },
              { label: "Mathematics & Statistics", href: "/department/mathematics-statistics" },
              { label: "Geology", href: "/department/geology" },
            ],
          },
          {
            heading: "Management, Art & Social Sciences",
            links: [
              { label: "Economics & Development Studies", href: "/department/economics-development-studies" },
              { label: "Archaeology", href: "/department/archaeology" },
              { label: "Tourism & Hospitality", href: "/department/tourism-hospitality" },
              { label: "Management & Commerce", href: "/department/management-commerce" },
              { label: "Pakistan Studies", href: "/department/pakistan-studies" },
              { label: "Media & Communication Studies", href: "/department/media-communication-studies" },
              { label: "Social & Gender Studies", href: "/department/social-gender-studies" },
              { label: "Psychological Studies", href: "/department/psychological-studies" },
              { label: "Education & Staff Training", href: "/department/education-staff-training" },
            ],
          },
          {
            heading: "Biological & Chemical Sciences",
            links: [
              { label: "Environmental Sciences", href: "/department/environmental-sciences" },
              { label: "Chemistry", href: "/department/chemistry" },
              { label: "Zoology", href: "/department/zoology" },
              { label: "Agricultural Sciences & Forestry", href: "/department/agricultural-sciences-forestry" },
              { label: "Botany", href: "/department/botany" },
              { label: "Biotechnology Genetics Forensic & Microbiology", href: "/department/biotechnology-genetics-forensic-microbiology" },
            ],
          },
          {
            heading: "Other Faculties",
            links: [
              { label: "Faculty of Allied Health Sciences", href: "/department/allied-health-sciences" },
              { label: "Hunerkada (Centre of Excellence for Art & Culture)", href: "/department/hunerkada" },
            ],
          },
        ],
        resources: {
          heading: "Resources",
          links: [
            { label: "Academic Calendar", href: "/events" },
            { label: "Downloads", href: "/downloads" },
            { label: "Rules/Policies", href: "/downloads" },
            { label: "Exam", href: "http://exam.uswat.edu.pk/", external: true },
            { label: "Digital Library", href: "http://www.digitallibrary.edu.pk/uniofswat.html", external: true },
          ],
        },
        promo: {
          image: IMAGES_PLACEHOLDER.academics,
          title: "Academic Programs",
          text: "49 academic programs across 22 teaching departments and 2 sub-campuses.",
          button: "View All Programs",
          href: "/programs",
        },
      },
    },
    {
      label: "Research",
      href: "/research",
      mega: {
        columns: [
          {
            heading: "Research Administration",
            links: [
              { label: "ORIC", href: "/research" },
              { label: "QEC", href: "/research" },
              { label: "ASRB", href: "/research" },
              { label: "SUJRIS Journal", href: "https://sujris.uswat.edu.pk/", external: true },
              { label: "HEC Projects", href: "/research" },
            ],
          },
        ],
        promo: {
          image: IMAGES_PLACEHOLDER.research,
          title: "Research and Innovation",
          text: "Advancing knowledge through research centers, journals, and funded projects.",
          button: "Learn More",
          href: "/research",
        },
      },
    },
    {
      label: "Administration",
      href: "/administration",
      mega: {
        columns: [
          {
            heading: "Offices",
            links: [
              { label: "VC Secretariat", href: "/about" },
              { label: "Pro-VC", href: "/about" },
              { label: "Registrar", href: "/about" },
              { label: "Treasurer", href: "/about" },
              { label: "Controller of Examination", href: "/about" },
              { label: "Public Relations", href: "/about" },
              { label: "Provost", href: "/about" },
              { label: "University Advancement & Financial Aid", href: "/about" },
            ],
          },
          {
            heading: "Directorates",
            links: [
              { label: "Admissions", href: "/admissions" },
              { label: "IT", href: "/contact" },
              { label: "Sports", href: "/campuses" },
              { label: "Planning & Development", href: "/about" },
              { label: "Works", href: "/about" },
              { label: "Administration", href: "/about" },
            ],
          },
          {
            heading: "Units & Boards",
            links: [
              { label: "Alumni Association (UOSAA)", href: "/alumni" },
              { label: "Central Library", href: "/library" },
              { label: "Media Cell", href: "/news" },
              { label: "Proctorial Board", href: "/contact" },
              { label: "YDC", href: "/contact" },
            ],
          },
        ],
        promo: {
          image: IMAGES_PLACEHOLDER.admin,
          title: "University Administration",
          text: "Explore offices, directorates, and support services.",
          button: "Learn More",
          href: "/administration",
        },
      },
    },
    {
      label: "Student Life",
      href: "/student-life",
      mega: {
        columns: [
          {
            heading: "Online Services",
            links: [
              { label: "Campus Management System", href: "https://cms1.uswat.edu.pk/" },
              { label: "e-Office", href: "https://uswat.edu.pk/e-office/" },
              { label: "Office 365", href: "https://uswat.edu.pk/office-365/" },
              { label: "Students Loan Schemes", href: "/admissions" },
              { label: "Digital Learning & Skills Enrichment Initiative", href: "/programs" },
              { label: "Pakistan Qualification Register", href: "/admissions" },
              { label: "M-Varsities", href: "/about" },
              { label: "Campus TV", href: "https://www.youtube.com/@Campus_Tv_UoS", external: true },
            ],
          },
        ],
        promo: {
          image: IMAGES_PLACEHOLDER.studentLife,
          title: "Student Life",
          text: "Campus services, online portals, and student resources.",
          button: "Learn More",
          href: "/student-life",
        },
      },
    },
  ],
};
