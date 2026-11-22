import type { FacultyMemberProfile } from "./faculty-profile";

export interface DepartmentDetail {
  id: string;
  name: string;
  sourceUrl: string;
  description: string;
  vision: string;
  mission: string;
  programs: { name: string; level: string }[];
  curriculum: { title: string; url: string }[];
  facultyMembers: FacultyMemberProfile[];
  contact: { email: string; office: string };
}

export const DEPARTMENTS_SCIENCES: DepartmentDetail[] = [
  {
    id: "computer-software-technology",
    name: "Department of Computer and Software Technology",
    sourceUrl: "https://uswat.edu.pk/department-of-computer-and-software-technology/",
    description:
      "The Department of Computer Science at University of Swat aims to provide education and training at all levels to contribute to the national pool of computer scientists who can meet the demands of the industry and the academia. The recent advances in Computer Science have been key contributors to the information technology revolution, and a huge software industry has evolved in the last two decades. The BS (AI) program gives students the in-depth knowledge they need to transform large and complex scenarios into actionable decisions, while BS (Data Science) has a dual emphasis on the basic principles of statistics and computer science, with foundational training in statistical and mathematical aspects of data analysis.",
    vision: "",
    mission: "",
    programs: [
      { name: "BS Computer Science", level: "Undergraduate" },
      { name: "BS Software Engineering", level: "Undergraduate" },
      { name: "BS Information Technology", level: "Undergraduate" },
      { name: "BS Artificial Intelligeance", level: "Undergraduate" },
      { name: "BS Data Science", level: "Undergraduate" },
      { name: "MS Computer Science", level: "MS/MPhil" },
      { name: "PhD in Computer Science", level: "PhD" },
    ],
    curriculum: [
      { title: "Board of Studies of entire programs – 2025", url: "https://uswat.edu.pk/wp-content/uploads/2025/11/Full-and-final-BOS.xlsx" },
      { title: "Fourth Board of Studies curriculum for 2021 intake and onward", url: "https://uswat.edu.pk/wp-content/uploads/2019/09/BOF-File.pdf" },
      { title: "BS Computer Science", url: "https://uswat.edu.pk/wp-content/uploads/2020/01/Com-Sci-BOS-2015.pdf" },
      { title: "BS Information Technology", url: "https://uswat.edu.pk/wp-content/uploads/2020/01/BS-IT-2015.pdf" },
      { title: "BS Software Engineering", url: "https://uswat.edu.pk/wp-content/uploads/2020/01/BS-SE-2015.pdf" },
    ],
    facultyMembers: [
      { name: "Dr. Niamat Ullah", title: "Professor", email: "niamat@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2025/09/Niamat-Ullah-Professor-BPS-21-UoS-Picture-1.png", cvUrl: "https://uswat.edu.pk/wp-content/uploads/2025/09/Dr.-Niamat-Ullah-CV.pdf" },
      { name: "Dr. Sana Ullah", title: "Professor and Chairman", email: "sana@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/sanaullah-1.jpg" },
      { name: "Dr. Amjad Ali", title: "Associate Professor", email: "amjad@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/DSCN0300.jpg" },
      { name: "Dr. Kifayat Ullah", title: "Assistant Professor, MS Coordinator", email: "kifayat@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/04/Dr.-Kifayat-Ullah-150x150.jpg", cvUrl: "https://uswat.edu.pk/wp-content/uploads/2024/04/kifayat-CV.pdf" },
      { name: "Dr. Fazal Qudus Khan", title: "Assistant Professor", email: "fazal.qadus@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-25-at-13.38.32-e1758792030847-150x150.jpeg" },
      { name: "Mr. Kiramat Rahman", title: "Assistant Professor", email: "kiramat@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/10/kiramat.jpg", cvUrl: "https://uswat.edu.pk/wp-content/uploads/2024/04/Kiramat_Rahman-CV.pdf" },
      { name: "Mr. Fida Hussain", title: "Assistant Professor", email: "fida@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/Fida-Pic.jpg" },
      { name: "Dr. Muzammil Khan", title: "Assistant Professor, HEC Approved PhD Supervisor", email: "muzammil@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-24-at-12.40.32-PM-150x150.jpeg", cvUrl: "https://uswat.edu.pk/wp-content/uploads/2024/03/Muzammil_CV-PhD-Updated-October-2023.pdf" },
    ],
    contact: { email: "", office: "Main Campus at Charbagh" },
  },
  {
    id: "mathematics-statistics",
    name: "Department of Mathematics and Statistics",
    sourceUrl: "https://uswat.edu.pk/department-of-mathematics-and-statistics/",
    description:
      "In today's world every day we are faced with situations where statistics can be applied, and statistics can be used to determine the potential outcome of thousands of things where the human mind alone wouldn't be able to. The department of statistics started functioning in 2010 with the establishment of University of Swat and is committed to train students to meet the demand and developing careers in teaching and other government and public sector organizations. Recent advancement in computer technology has opened up more employment prospects for Statisticians in fields such as medical research, agriculture research, industry and education.",
    vision: "",
    mission:
      "The department promotes advanced learning methodologies and persistently strives to develop creative thinking skills in students in order to prepare them to take effective decisions on the basis of applying the statistical methods. No doubt the use of modern statistical soft wares has made the science of statistics more accurate.",
    programs: [
      { name: "BS Mathematics", level: "Undergraduate" },
      { name: "BS Statistics", level: "Undergraduate" },
      { name: "MPhil Mathematics", level: "MS/MPhil" },
      { name: "Phd Mathematics", level: "PhD" },
    ],
    curriculum: [
      { title: "Scheme of Studies 2024", url: "https://uswat.edu.pk/wp-content/uploads/2025/01/Scheme-of-Studies-2024.pdf" },
    ],
    facultyMembers: [
      { name: "Dr. Faiz Muhammad Khan", title: "Associate Professor & Chairman", email: "drfaiz@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-22-at-9.11.01-AM-150x150.jpeg" },
      { name: "Dr. Ghaus ur Rahman", title: "Associate Professor of Mathematics", email: "dr.ghaus@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2025/01/Dr.Ghaus-Photo-150x150.jpeg" },
      { name: "Dr. Amir Khan", title: "Assistant Professor of Mathematics", email: "amirkhan@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2025/01/Dr.-Amir-Photo-e1737625543134-150x150.jpeg" },
      { name: "Dr. Iftikhar Ahmed", title: "Assistant Professor of Mathematics", email: "iftikhar@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2025/01/Dr.-Iftikhar-Photo-150x150.jpeg" },
      { name: "Dr. Gohar Ayub", title: "Assistant Professor of Statistics", email: "goharayub@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2026/10/WhatsApp-Image-2026-10-15-at-15.38.32-150x150.jpeg" },
      { name: "Dr. Amjad Ali", title: "Assistant Professor of Mathematics", email: "amjadali@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/Amjad-Ali-Picture-150x150.jpeg" },
      { name: "Dr. Mahrukh Anum", title: "Lecturer in Statistics", email: "mahrukhanum@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-17-at-11.32.45-PM-150x150.jpeg" },
      { name: "Dr. Asaf Khan", title: "Lecturer in Mathematics", email: "asafkhan@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/Asaf-Khan-Picture-1-150x150.jpg" },
    ],
    contact: { email: "", office: "Main Campus University of Swat" },
  },
  {
    id: "geology",
    name: "Department of Geology",
    sourceUrl: "https://uswat.edu.pk/department_of_geology/",
    description:
      "Department of Geology has been made functional in the University of Swat in the year of 2014 and started BS Geology program. It is four year program of eight semesters, each semester running for sixteen weeks, and the degree is awarded on successful completion of a minimum 132 credit hours, including six credits for the project, with a CGPA of at least 2.0. The courses of BS Geology have been designed to train professional Geologist by imparting high quality education in the field of Geology. The students are trained with skills to apply the concepts, principles and best practices in Oil & Gas sectors as well as in mining departments and other mineral explorations.",
    vision:
      "Building on the existing strengths, the Centre for Earth & Space Sciences is bridging a link between the academia and industry. Such kind of link will help in the academia and professional growth of the students and the faculty members.",
    mission:
      "Department of Geology has a mission to provide state of the art teaching and research facilities to produce professional graduates at the highest national and international levels for academic institutions, Oil Companies and Mineral exploration/mining. We also aim to provide a research based environment by establishing laboratories equipped with sophisticated research facilities and establishing strong collaborations with other renowned institutions.",
    programs: [{ name: "BS Geology", level: "Undergraduate" }],
    curriculum: [
      { title: "BS Geology (2018)", url: "https://uswat.edu.pk/wp-content/uploads/2019/09/CESS-Curriculum.pdf" },
    ],
    facultyMembers: [
      { name: "Dr. Zaheen Ullah", title: "Assistant Professor", email: "zaheen.ullah@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-22-at-13.40.45-150x150.jpeg" },
      { name: "Mr. Adnan Khan", title: "In-charge & Lecturer", email: "adnankhan@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/WhatsApp-Image-2021-06-11-at-11.43.08-AM-e1623730973830-150x150.jpeg" },
      { name: "Mr. Muhammad Ibrar", title: "Lecturer", email: "mibrar@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2020/10/M.Ibrar-Pic-150x150.jpg" },
      { name: "Dr. Subhan Ullah", title: "Lecturer", email: "subhan@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2026/01/Subhan-Ullah-Passport-size-pic--150x150.jpeg" },
      { name: "Mr. Muhammad Idrees", title: "Lecturer", email: "idrees@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/WhatsApp-Image-2021-06-15-at-1.10.44-PM-e1623755707168-150x145.jpeg" },
    ],
    contact: { email: "cess@uswat.edu.pk", office: "Department of Geology, Main Campus at Charbagh" },
  },
  {
    id: "environmental-sciences",
    name: "Department of Environmental Sciences",
    sourceUrl: "https://uswat.edu.pk/department-of-environmental-sciences/",
    description:
      "The Department of Environmental Sciences was established in 2012 with the aim to provide prospective students with extensive knowledge, understanding and skills to preserve, protect and rehabilitate local and global environment and build a sustainable future. The program focuses to pioneer a new generation of research and teaching methods that understand the issues and arrive at solutions to pressing societal problems, preparing its graduates to understand environmental systems, predict environmental change, participate in the management of the environment, and contribute for the promotion of sustainable society. The Department's all-embracing goal is to make it a leading institution in Environmental Sciences based on the quality of graduates produced, number of research scholars, quality and production of scientific research, and services to the community and public sector.",
    vision:
      "The Department focuses to pioneer a new generation of research and teaching methods that understand the fundamental processes which contribute to environmental pollution and natural resource degradation, and arrive at solutions to pressing societal problems; moreover, to prepare graduates for understanding environmental systems, predicting environmental changes, participating in the management of the environment, and contributing for the promotion of sustainable society.",
    mission:
      "To provide formal education and research in the field of Environmental and Conservation Sciences to bring the education standards up to the international level, to work for the conservation of natural resources, and to provide a good research environment for publishing research outcomes in the journals of international repute. It also aims to provide professional services such as special trainings, analyses, surveys and consultancies to the manufacturing and processing industries, NGOs, CBOs and engineering firms.",
    programs: [
      { name: "BS Environmental Sciences (04 Year)", level: "Undergraduate" },
      { name: "BS Disaster Preparedness and Climate Change: 4 Years", level: "Undergraduate" },
      { name: "MS/MPhil Environmental Sciences", level: "MS/MPhil" },
      { name: "PhD Environmental Sciences", level: "PhD" },
    ],
    curriculum: [
      { title: "One year Diploma in Geomatics (GIS & RS)", url: "https://uswat.edu.pk/wp-content/uploads/2019/09/Scheme-of-Studies-for-One-year-Diploma-in-Geomatics-GIS-RS.docx" },
      { title: "BS Environmental Sciences", url: "https://uswat.edu.pk/wp-content/uploads/2019/09/Scheme-of-Studies-for-BS-4-years-Environmental-sciences.docx" },
      { title: "BS Climate Change", url: "https://uswat.edu.pk/wp-content/uploads/2019/09/Scheme-of-Study-for-BS-4-years-Climate-Change.docx" },
      { title: "MS/MPhil Environmental Sciences", url: "https://uswat.edu.pk/wp-content/uploads/2019/09/Scheme-of-Study-for-MS-MPhil-Environmental-Sciences.docx" },
      { title: "PhD Environmental Sciences", url: "https://uswat.edu.pk/wp-content/uploads/2019/09/Scheme-of-Study-for-PhD-Environmental-Sciences.doc" },
    ],
    facultyMembers: [
      { name: "Dr. Muhammad Qasim", title: "Professor & Chairperson, Pro Vice Chancellor", email: "drqasim@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2020/01/Prof-Dr-Qasim.jpg" },
      { name: "Dr. Javeed Nawab", title: "Professor", email: "jnawab@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2025/10/WhatsApp_Image_2025-10-02_at_10.32.12-removebg-preview-150x150.png" },
      { name: "Dr. Kifayatullah Khan", title: "Associate Professor", email: "drkhan@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2025/10/KK-Copy-removebg-preview-e1759735025336-150x150.png" },
      { name: "Dr. Sanaullah", title: "Assistant Professor", email: "sanaullah@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2025/10/Mr.-Sanaullah-removebg-preview-e1759734860756-150x150.png" },
      { name: "Dr. Anwarzeb Khan", title: "Assistant Professor", email: "khan.anwarzeb@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/01/Dr.-Anwarzeb-Khan-150x150.jpg" },
      { name: "Dr. Wajid Rashid", title: "Lecturer", email: "wajid@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2025/10/wajid-Rashid-removebg-preview-e1759734976721-150x150.png" },
      { name: "Dr. Muhammad Ayaz", title: "Lecturer", email: "mayaz@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2026/08/Dr-Muhammad-Ayaz-Picture-150x150.jpg" },
      { name: "Dr. Khalil Ur Rahman", title: "Adjunct Faculty, Associate Professor, Shandong University, Jinan, China", email: "", image: "https://uswat.edu.pk/wp-content/uploads/2026/11/env001.png" },
    ],
    contact: { email: "", office: "Department of Environmental Sciences, Academic Block-A, University of Swat" },
  },
  {
    id: "chemistry",
    name: "Department of Chemistry",
    sourceUrl: "https://uswat.edu.pk/department-of-chemistry/",
    description:
      "Perhaps uniquely among the experimental sciences, Chemistry contribute to our knowledge not just by discovering what already exists in the world, but also by adding to it, through the creation of new substances and materials at the molecular level. Chemistry is a scientific discipline which studies the properties, composition, and transformation of matter. Considering the immense importance and scope of Chemistry, the Institute of Chemical Sciences was established in November 2013 at the University of Swat. The institute is equipped with highly qualified, dedicated and proficient faculty, and students who wish to pursue an academic/research carrier in Chemistry are welcome to join us.",
    vision:
      "The vision of the Institute of Chemical Sciences is to advance the chemical sciences by engaging faculty – qualified from well reputed organizations – who provide quality education, research, and service opportunities. We will graduate scientists who are knowledgeable in chemistry, embrace recognized standards of ethical scientific behavior, and engage in safe and sustainable chemical practices.",
    mission:
      "The institute of chemical sciences pledges itself to encourage in the broadest and most liberal manner, the advancement of science and particularly chemistry in all of its branches including, Analytical-, Bio-, Inorganic- Organic- and Physical chemistry through its education, research, and service missions.",
    programs: [
      { name: "BS in Chemistry", level: "Undergraduate" },
      { name: "Master of Philosophy in Chemistry", level: "MS/MPhil" },
    ],
    curriculum: [
      { title: "BS Chemistry", url: "https://uswat.edu.pk/wp-content/uploads/2025/01/UoS-BS-4-Year-Chemistry-Syllabus-2024.pdf" },
      { title: "MPhil and PhD", url: "https://uswat.edu.pk/wp-content/uploads/2023/12/Annex-4-M.Phil-and-PhD-Curricula.pdf" },
    ],
    facultyMembers: [
      { name: "Dr. Najeeb Ur Rehman", title: "Professor", email: "najeeb@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-25-at-12.51.17-e1706263309704-150x150.jpeg" },
      { name: "Dr. Fazal Mabood", title: "Professor", email: "fazal@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2021/04/fazal-150x150.jpg" },
      { name: "Dr. Muhammad Omer", title: "Associate Professor & Chairman", email: "omarmarwat@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2020/05/Dr-M-Omer-pic-for-UoS-Website.jpg" },
      { name: "Dr. Ihsan Ullah", title: "Associate Professor", email: "ihsanmtk@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2026/10/Dr.-Ihsan_Chem-150x150.jpeg" },
      { name: "Dr. Adnan Shahzad", title: "Assistant Professor", email: "adnanshahzad@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/07/picture-150x150.jpg" },
      { name: "Dr. Adnan", title: "Associate Professor", email: "adnanchem@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/Dr.Adnan_.jpg" },
      { name: "Dr. Main Gul Sayed", title: "Assistant Professor", email: "mian@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/photo-jpg.jpg" },
      { name: "Dr. Mohammad Sohail", title: "Assistant Professor", email: "msohail2000@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2022/05/sohail-chem-150x150.jpg" },
    ],
    contact: { email: "ihsanmtk@uswat.edu.pk", office: "" },
  },
  {
    id: "zoology",
    name: "Department of Zoology",
    sourceUrl: "https://uswat.edu.pk/department-of-zoology/",
    description:
      "The Department of Zoology is one of the most prominent department in the University of Swat, established in 2011. The aim of the Centre is to give opportunities to the students to get quality education and pursue research at their door steps. The Centre offers BS-Zoology (4year), BS-Fisheries (4year) programs. The offered courses will educate the students in the field of Zoology and the graduates would be able to serve in prestigious institutions at national and international level.",
    vision: "To achieve excellence in the field of animal sciences through high quality education and research linked to national and international need.",
    mission:
      "The Department of Zoology is committed to the production of well-rounded international standard academicians in the field of animal sciences. The Centre aims to give coverage of modern sciences, followed by the opportunity to specialize in one or more areas reflecting the students interest, inculcating high level of integrity, responsibility and quality research skills to enable the graduates to participate in community development projects.",
    programs: [
      { name: "BS Zoology", level: "Undergraduate" },
      { name: "MSc in Zoology", level: "MS/MPhil" },
    ],
    curriculum: [
      { title: "BS Zoology", url: "https://uswat.edu.pk/wp-content/uploads/2020/01/BS-Zoology-Curriculum-2016-and-onward.pdf" },
    ],
    facultyMembers: [
      { name: "Dr. Akhar Rasool", title: "In-Charge, Assistant Professor", email: "arasool@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2022/06/dr-150x150.png" },
      { name: "Dr. Tanzil Ur Rahman", title: "Assistant Professor", email: "trahman@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-18-at-3.20.47-PM-150x150.jpeg" },
      { name: "Dr. Ghulam Nabi", title: "Assistant Professor", email: "gnabi@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2025/10/Photo-150x150.jpg" },
      { name: "Dr. Naseer Ullah", title: "Lecturer", email: "naseer@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/ns-150x150.jpg" },
      { name: "Ms. Rohi Naz", title: "Lecturer, M.Phil Zoology", email: "", image: "https://uswat.edu.pk/wp-content/uploads/2020/01/214-2140811_computer-icons-woman-female-silhouette-female-silhouette-icon-150x150.png" },
      { name: "Ms. Shabnam", title: "Lecturer", email: "", image: "https://uswat.edu.pk/wp-content/uploads/2020/01/214-2140811_computer-icons-woman-female-silhouette-female-silhouette-icon-150x150.png" },
      { name: "Dr. Muhammad Yousaf", title: "Assistant Professor (Fixed Pay)", email: "dyousaf@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-22-at-1.40.08-PM-150x150.jpeg" },
    ],
    contact: { email: "", office: "" },
  },
  {
    id: "agricultural-sciences-forestry",
    name: "Department of Agricultural Sciences and Forestry",
    sourceUrl: "https://uswat.edu.pk/department-of-agricultural-sciences-and-forestry/",
    description:
      "Department of Agricultural Sciences and Forestry in University of Swat was established in 2014 with the aim to focus on the sustainable management and promotion of Forests conservation for their biological diversity, ecological, recreational, scientific and educational values and quality water production functions for the greater good of the people of Pakistan and the world at large. This department will provide quality education with relevance by acquiring high qualified staff and state of the art equipment and facilities in the field of forestry. The BS Forestry program offers quality education, experienced faculty, modern laboratories, and extensive field-based learning in the ecologically rich forests of the Hindu Kush region.",
    vision: "",
    mission: "",
    programs: [
      { name: "BS Forestry", level: "Undergraduate" },
      { name: "M.Phil. Forestry", level: "MS/MPhil" },
    ],
    curriculum: [
      { title: "5th Board of Studies Forestry 2025", url: "https://uswat.edu.pk/wp-content/uploads/2026/07/5th_BOS_Forestry_2025.pdf" },
      { title: "BS Forestry 2017", url: "https://uswat.edu.pk/wp-content/uploads/2020/08/1st-BoS-meeting-Final-working-paper-October-2017-modified-up-todate-1-1.doc" },
    ],
    facultyMembers: [
      { name: "Dr. Zahid Ullah", title: "Associate Professor", email: "zahidtaxon@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2025/10/Dr.-Zahid-Ullah-Profile-pic.jpeg" },
      { name: "Dr. Naveed Alam", title: "Assistant Professor", email: "naveedalam@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-15-at-3.58.02-AM-1-e1615960066686-150x150.jpeg" },
      { name: "Dr. Fazal Rabbi", title: "Assistant Professor", email: "rabbi.eco@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/11/IMG_42571-150x150.jpg" },
      { name: "Dr. Bilal Ahmad", title: "Assistant Professor", email: "bilalahmad@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2021/03/IMG_9607-sa-e1615804658793-150x150.jpg" },
      { name: "Dr. Sher Shah", title: "Assistant Professor", email: "s.shah@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/Dr.Sher_Photo-2-150x150.jpg" },
      { name: "Mr. Kaleem Mehmood", title: "Lecturer", email: "kaleemmehmood@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2026/11/WhatsApp-Image-2026-11-11-at-14.48.51-150x150.jpeg" },
      { name: "Dr. Sultan Muhammad", title: "Lecturer", email: "sultanmuhammad@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/Sultan-150x150.jpeg" },
      { name: "Mr. Hamid-Ur-Rahman", title: "Lecturer", email: "hrahman@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/hamid-e1623211215962-150x150.jpg" },
    ],
    contact: { email: "", office: "" },
  },
  {
    id: "botany",
    name: "Department of Botany",
    sourceUrl: "https://uswat.edu.pk/department-of-botany/",
    description:
      "Botany is the scientific study of plants, and the famous saying that \"All Flesh is Grass\" reflects its significance in the biosphere. It began with tribal lore, used to identify edible, medicinal and poisonous plants, thus making botany one of the oldest sciences. The department of Botany at University of Swat was, therefore, established with the aim to provide interdisciplinary teaching and research opportunities in plant sciences and to apply the acquired acknowledge for sustainable economic growth of the society living in the naturally richest biodiversity zone of the country. The Department of Botany offers a wide range of courses and quality training, and as such, our graduates shall be highly competitive in the job market.",
    vision:
      "\"To establish internationally acclaimed department of Botany contributing for the advancement of teaching, research and development of manpower, and ensuring to offer quality education and human resources in order to meet the coming national and global challenges, and also working for restoration of natural resources of the country in general and of the region in particular\".",
    mission: "",
    programs: [
      { name: "BS in Botany", level: "Undergraduate" },
      { name: "MPhil in Botany", level: "MS/MPhil" },
      { name: "PhD in Botany", level: "PhD" },
    ],
    curriculum: [
      { title: "BS/MPhil/PhD in Botany", url: "https://uswat.edu.pk/wp-content/uploads/2020/09/Syllabus-of-BS-M.Sc-M.Phil-PhD-approved-in-4th-Meeting-of-Board-of-Studies-Final.pdf" },
      { title: "Approval of Board of Studies", url: "https://uswat.edu.pk/wp-content/uploads/2020/08/Minutes-Approved-4th-Meeting-of-BOS.jpeg" },
    ],
    facultyMembers: [
      { name: "Dr. Hassan Sher", title: "Professor (SAARC Gold Medalist)", email: "hassansher@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2020/02/HS-1-300x298.jpg" },
      { name: "Dr. Ahmad Ali", title: "Associate Professor & Director", email: "draali@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/WhatsApp-Image-2021-06-03-at-4.42.11-PM-150x150.jpeg" },
      { name: "Dr. Zahid Ullah", title: "Associate Professor", email: "zahidtaxon@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2026/05/zahid-bot-150x150.png" },
      { name: "Dr. Shazia Sakhi", title: "Associate Professor", email: "shaziasakhi@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2020/01/214-2140811_computer-icons-woman-female-silhouette-female-silhouette-icon.png" },
      { name: "Dr. Junaid Khan", title: "Assistant Professor", email: "khan.junaid@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/01/IMG_20240116_142108-e1705492191164-150x150.jpg" },
      { name: "Dr. Zakia Ahmad", title: "Assistant Professor", email: "zakia@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2020/01/214-2140811_computer-icons-woman-female-silhouette-female-silhouette-icon-150x150.png" },
      { name: "Dr. Muhammad Adil", title: "Assistant Professor", email: "shahidhussain@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2025/10/dr_muhammad_adil-150x150.jpg" },
      { name: "Dr. Shazia", title: "Lecturer", email: "shazia.dilbar@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2020/01/214-2140811_computer-icons-woman-female-silhouette-female-silhouette-icon.png" },
    ],
    contact: { email: "", office: "Department of Botany, University of Swat, Ground Floor, Academic Block-C" },
  },
  {
    id: "biotechnology-genetics-forensic-microbiology",
    name: "Department of Biotechnology, Genetics, Forensic and Microbiology",
    sourceUrl: "https://uswat.edu.pk/department-of-biotechnology-genetics-forensic-and-microbiology/",
    description:
      "The 21st century is considered an era of biotechnology and applied microbiology. Recognizing the vast importance of microbiology, the University of Swat established the Department of Microbiology in 2011. Over time, the Department of Microbiology evolved into the Department of Biotechnology, Genetics, Forensic and Microbiology, and later in December 2022 the Department of Forensic Science was merged with it. The Centre for Biotechnology and Microbiology offers research-oriented BS, M.Phil, and PhD degrees in Biotechnology, Microbiology, Genetics, and Forensic Science.",
    vision:
      "To create a world-renowned Department of Biotechnology, Genetics, Forensic and Microbiology, promoting innovation, fostering multidisciplinary research, and imparting high-quality education to address societal concerns and enhance scientific understanding.",
    mission:
      "The Department of Biotechnology, Genetics, Forensic and Microbiology is committed to provide a foundation in the basic principles of Biological Sciences with high level of veracity and quality education/ research skills to its students enabling them to serve professionally in industries, institutions and community. The graduates would be able to face the future challenges, facilitated with the knowledge, skills, and ethical principles essential for carrier development and significant contributions to society.",
    programs: [
      { name: "BS Biotechnology", level: "Undergraduate" },
      { name: "BS Microbiology", level: "Undergraduate" },
      { name: "BS Genetics", level: "Undergraduate" },
      { name: "BS Forensic Sciences", level: "Undergraduate" },
      { name: "MPhil in Biotechnology", level: "MS/MPhil" },
      { name: "MPhil in Microbiology", level: "MS/MPhil" },
      { name: "PhD in Biotechnology", level: "PhD" },
      { name: "PhD in Microbiology", level: "PhD" },
    ],
    curriculum: [
      { title: "BS Biotechnology", url: "https://uswat.edu.pk/wp-content/uploads/2020/03/BS-Biotechnology.pdf" },
      { title: "BS Microbiology", url: "https://uswat.edu.pk/wp-content/uploads/2020/03/BS-Microbiology.pdf" },
      { title: "BS Genetics", url: "https://uswat.edu.pk/wp-content/uploads/2020/03/BS-Genetics.pdf" },
      { title: "BS Forensic Sciences", url: "https://uswat.edu.pk/wp-content/uploads/2020/01/BOS.pdf" },
      { title: "MPhil in Biotechnology", url: "https://uswat.edu.pk/wp-content/uploads/2020/03/MPhil-Biotech.pdf" },
    ],
    facultyMembers: [
      { name: "Dr. Muhammad Nazir Ud-Din", title: "Chairman and Associate Professor", email: "nazir@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2020/03/dr.Nazir_-254x300.jpg" },
      { name: "Prof. Dr. Fazal Akbar", title: "Professor", email: "fazalakbar@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2025/10/FAZAL-AKBAR-PIC-150x150.jpeg" },
      { name: "Prof. Dr. Shahid Ali", title: "Professor", email: "shahidali@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2023/03/My-Pic-150x141.jpeg" },
      { name: "Dr. Haji Khan", title: "Associate Professor", email: "hkbiotech@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/07/Haji-Khan-e1720692671175-150x150.jpg" },
      { name: "Dr. Muhammad Israr", title: "Associate Professor", email: "israr@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/01/Muhammadisrar1.jpg" },
      { name: "Dr. Ali Akbar", title: "Professor", email: "aliakbar@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2023/09/Ali-Akbar-Picture-150x150.jpg" },
      { name: "Dr. Syed Shujait Ali", title: "Associate Professor", email: "shujaitswati@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2020/03/Shujiatali.png" },
      { name: "Dr. Akhar Rasool", title: "Assistant Professor", email: "arasool@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2022/06/dr-150x150.png" },
    ],
    contact: { email: "", office: "" },
  },
];
