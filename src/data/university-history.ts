export interface HistoryMilestone {
  year: string;
  title: string;
  description: string;
}

export interface ViceChancellorRecord {
  name: string;
  period: string;
  role: "Vice Chancellor" | "Acting Vice Chancellor";
  image?: string;
  note?: string;
}

export const FOUNDING_FACTS = [
  { label: "Announced", value: "29 May 2010", note: "By the then Prime Minister of Pakistan during a visit to Swat" },
  { label: "Established", value: "7 July 2010", note: "By order of the Governor of Khyber Pakhtunkhwa" },
  { label: "First Vice Chancellor", value: "August 2010", note: "Dr. Muhammad Farooq Khan (Shaheed)" },
  { label: "Founding disciplines", value: "7", note: "At the first academic session, 2010–11" },
];

export const HISTORY_MILESTONES: HistoryMilestone[] = [
  {
    year: "1972",
    title: "A long-standing demand",
    description:
      "After the National Education Policy of 1972 reflected the need for a university in Swat, the then Prime Minister Zulfikar Ali Bhutto announced one during a visit to the valley. The demand remained unfulfilled for decades.",
  },
  {
    year: "29 May 2010",
    title: "Announcement in Swat",
    description:
      "Following the restoration of peace in the valley, the then Prime Minister of Pakistan announced the establishment of the University of Swat during his visit to Swat.",
  },
  {
    year: "July 2010",
    title: "Formal existence",
    description:
      "The university came into formal existence by order of the Honourable Governor of Khyber Pakhtunkhwa, Mr. Awais Ahmad Ghani, with the prior approval of the President of Pakistan. HEC records the establishment date as 7 July 2010.",
  },
  {
    year: "August 2010",
    title: "First Vice Chancellor",
    description:
      "Dr. Muhammad Farooq Khan (Shaheed), a psychiatrist and Islamic scholar, was appointed the first Vice Chancellor. The Higher Education Department handed over two buildings at Saidu Sharif to start academic work.",
  },
  {
    year: "2010–11",
    title: "First academic session",
    description:
      "The university opened with seven disciplines — Business Administration, Computer Science, Development Studies, Economics, Education, Law & Shariah and Statistics — with a few hundred students. Official records cite 272 students at the start.",
  },
  {
    year: "2011–12",
    title: "Expanding teaching",
    description:
      "Software Engineering was introduced, followed by new BS-level departments including Zoology, Microbiology and Environmental Sciences.",
  },
  {
    year: "2010s",
    title: "A permanent home at Charbagh",
    description:
      "Land was acquired for the university's own campus at Charbagh. Phase-I was completed with three academic blocks, boys and girls hostels, a mosque, library, examination section, administration block, staff residences, boundary wall and road infrastructure.",
  },
  {
    year: "2016",
    title: "Women Campus",
    description:
      "A second campus for women was established to widen access to higher education in the valley. In January 2024, HEC granted accreditation and NOC to four of its degree programmes: BS Zoology, BS Botany, BS Psychology and BS Home Economics.",
  },
  {
    year: "2017",
    title: "Growth in scale",
    description:
      "The university had grown to 22 teaching departments and 49 academic programmes across two sub-campuses, with more than 3,000 students enrolled — up from seven disciplines and 272 students in 2010.",
  },
  {
    year: "2025",
    title: "Strategic Plan 2024–2030",
    description:
      "The 10th meeting of the Senate, held in May 2025, approved the University of Swat Strategic Plan 2024–2030, annual reports and the proposed University of Swat Statutes, 2024.",
  },
  {
    year: "2026",
    title: "A new chapter",
    description:
      "The university became the first in the province to launch a major solarisation project, and Prof. Dr. Husnul Amin assumed office as Vice Chancellor in October 2026.",
  },
];

export const VICE_CHANCELLORS: ViceChancellorRecord[] = [
  {
    name: "Prof. Dr. Husnul Amin",
    period: "4 October 2026 – present",
    role: "Vice Chancellor",
    image: "/vc/husnul-amin.jpg",
    note: "Current Vice Chancellor of the University of Swat.",
  },
  {
    name: "Prof. Dr. Muhammad Qasim",
    period: "3 June 2026 – 4 October 2026",
    role: "Acting Vice Chancellor",
    image: "/vc/muhammad-qasim.jpg",
  },
  {
    name: "Prof. Dr. Hassan Sher",
    period: "7 October 2022 – 2 June 2026",
    role: "Vice Chancellor",
    image: "/vc/hassan-sher.jpg",
    note: "Previously served as Pro Vice Chancellor and as Acting Vice Chancellor.",
  },
  {
    name: "Prof. Dr. Hassan Sher",
    period: "18 December 2021 – 7 October 2022",
    role: "Acting Vice Chancellor",
    image: "/vc/hassan-sher.jpg",
  },
  {
    name: "Prof. Dr. Muhammad Jamal Khan",
    period: "20 December 2017 – 18 December 2022",
    role: "Vice Chancellor",
    image: "/vc/muhammad-jamal-khan.jpg",
  },
  {
    name: "Prof. Dr. Jehan Bakht",
    period: "7 December 2015 – 9 June 2017",
    role: "Acting Vice Chancellor",
    image: "/vc/jehan-bakht.jpg",
  },
  {
    name: "Prof. Dr. Muhammad Jahanzeb Khan Yousafzai",
    period: "3 December 2011 – 2 December 2015",
    role: "Vice Chancellor",
    image: "/vc/muhammad-jahanzeb-khan.jpg",
  },
  {
    name: "Prof. Dr. Muhammad Farooq Swati",
    period: "3 December 2011",
    image: "/vc/Dr Farooq Swati.jpeg",
    role: "Acting Vice Chancellor",
  },
  {
    name: "Dr. Muhammad Farooq Khan (Shaheed)",
    period: "August 2010 – 2 October 2010",
    role: "Vice Chancellor",
    image: "/vc/muhammad-farooq-khan-shaheed.jpg",
    note: "Founding Vice Chancellor. A psychiatrist and Islamic scholar, he was assassinated in Mardan on 2 October 2010 and was awarded Sitara-e-Imtiaz posthumously.",
  },
];

export const PRO_VICE_CHANCELLORS = ["Prof. Dr. Muhammad Qasim", "Prof. Dr. Hassan Sher"];

export const REGISTRARS = [
  { name: "Dr. Arshad Ali Khan", period: "3 June 2026 – present" },
  { name: "Fayyaz Ahmed Khan", period: "8 May 2025 – 3 June 2026" },
  { name: "Imtiaz Ali", period: "18 October 2022 – 8 May 2025" },
  { name: "Muhammad Riaz", period: "6 January 2022 – 17 October 2022" },
  { name: "Mahboob Ur Rahman", period: "14 February 2019 – 6 January 2022" },
  { name: "Zahid Ullah", period: "1 March 2018 – 14 February 2022" },
  { name: "Dr. Hassan Sher", period: "17 March 2016 – 28 February 2018" },
  { name: "Mahboob Ur Rahman", period: "24 January 2012 – 16 March 2016" },
  { name: "Sher Alam Khan", period: "28 September 2010 – 7 November 2011" },
];

export const HISTORY_SOURCES = [
  {
    label: "University of Swat — About University (official history)",
    url: "https://uswat.edu.pk/about-university",
  },
  {
    label: "University of Swat — Vice Chancellor's Secretariat",
    url: "https://uswat.edu.pk/vc-office",
  },
  {
    label: "Higher Education Commission — University of Swat",
    url: "https://www.hec.gov.pk/english/universities/Pages/KPK/University-of-Swat.aspx",
  },
  {
    label: "Wikipedia — University of Swat (Vice chancellors and registrars)",
    url: "https://en.wikipedia.org/wiki/University_of_Swat",
  },
  {
    label: "Dawn — Swat a centre of quality education (31 August 2014)",
    url: "https://www.dawn.com/news/1128929",
  },
  {
    label: "The News — Segregation in co-education (24 April 2016)",
    url: "https://www.thenews.com.pk/tns/detail/560799-segregation-co-education",
  },
  {
    label: "USAID HESSA — University of Swat profile",
    url: "https://hessa.utah.edu/uos",
  },
];
