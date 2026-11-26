import type { FacultyMemberProfile } from "./faculty-profile";

export interface DepartmentDetail {
  id: string;
  name: string;
  sourceUrl: string;
  description: string;
  vision: string;
  mission: string;
  objective?: string;
  achievements?: string[];
  labs?: { name: string; description: string; image: string }[];
  careerPaths?: string[];
  admissionNotes?: string[];
  programs: { name: string; level: string }[];
  curriculum: { title: string; url: string }[];
  facultyMembers: FacultyMemberProfile[];
  contact: { email: string; office: string };
}

export const DEPARTMENTS_HUMANITIES: DepartmentDetail[] = [
  {
    id: "english-foreign-languages",
    name: "Department of English and Foreign Languages",
    sourceUrl: "https://uswat.edu.pk/department-of-english-and-foreign-languages/",
    description:
      "In today's world, English has assumed increasing significance because of its global relevance and as a key language for knowledge acquisition, dissemination, and as a medium of international communication. The program we offer in the department aims at producing graduates who will have strong written, oral and analytical skills in the English language that would help them fulfill their economic and socio-cultural needs. Moreover, the syllabus is designed to inculcate a creative, analytical and reflective mindset in our students. Their critical ability and independent thinking will not only help them groom into more conscientious individuals but they will also be able to respond in a more meaningful way to the opportunities and challenges in their societies in a rapidly changing world.",
    vision:
      "To be a leading department nationally and internationally recognized for the study of English literature and linguistics. In the future, we aim to establish an excellence center for foreign language studies including English, Chinese, Japanese, German, Spanish, and French languages.",
    mission:
      "To establish a high quality department that provides a high quality academic environment and relevant education for the needs of the students. We inculcate and groom creativity and independent thinking through student-centered participatory teaching methods.",
    programs: [
      { name: "BS English", level: "Undergraduate" },
      { name: "MPhil (Linguistics)", level: "MS/MPhil" },
    ],
    curriculum: [
      { title: "BS English", url: "https://uswat.edu.pk/wp-content/uploads/2020/01/CURRICULUM-ENGLISH-HEC-2017.pdf" },
    ],
    facultyMembers: [
      {
        name: "Dr. Syed Hanif Rasool",
        title: "Associate Professor & Chairman",
        email: "syedhanifrasool@uswat.edu.pk",
        image: "/faculty/eng-o1-150x150.png",
      },
      {
        name: "Dr. Syed Shujaat Ali",
        title: "Associate Professor",
        email: "shujaat@uswat.edu.pk",
        image: "/faculty/shujaat-ali-118x150-removebg-preview.png",
      },
      {
        name: "Dr. Imdad Ullah Khan",
        title: "Assistant Professor",
        email: "imdad.khan@uswat.edu.pk",
        image: "/faculty/Dr.-Imdad-Ullah-Photo-01-150x150.png",
      },
      {
        name: "Mr. Zakirullah",
        title: "Lecturer",
        email: "zakirsalarkale@gmail.com",
        image: "/faculty/zakir-150x150-removebg-preview.png",
      },
      {
        name: "Mr. Sadiq Hussain",
        title: "Lecturer",
        email: "sadiqhussain@uswat.edu.pk",
        image: "/faculty/SADIQ-150x150-removebg-preview.png",
      },
    ],
    contact: { email: "defl@uswat.edu.pk", office: "" },
  },
  {
    id: "islamic-arabic-studies",
    name: "Department of Islamic and Arabic Studies",
    sourceUrl: "https://uswat.edu.pk/department-of-islamic-and-arabic-studies/",
    description:
      "Department of Islamic & Arabic Studies was launched in late 2017 with the purpose to enlighten the minds of graduates with the knowledge, skills and disposition of Quran and Sunnah. The department will provide a highly intellectual and aspirational environment to the scholar of the Islamic & Arabic studies to link and apply the knowledge of Quran and Sunnah in its true spirit for the revival of the Islamic knowledge and guidance of the society through educative intervention in the day-to-day routines of the academia and society. Keeping in view the global nature of the current world and the multidimensional challenges of the time, the need and importance of Islamic knowledge is paramount. Currently the department offers BS Islamic Studies, MPhil Islamic Studies, MPhil Arabic Studies and PhD Islamic Studies degree programs.",
    vision:
      "Department of Islamic & Arabic Studies aspires to inculcate the knowledge of Islam with relevance to the contemporary world particularly from the relevance of quality and religious harmony.",
    mission:
      "Department of Islamic & Arabic Studies has strengthened and channelized its resources to inculcate Islamic values and religious harmony among its graduates through intellectual interactions, research, dialogues and intra-faith modernity in relevance to the demands of the modern world.",
    programs: [
      { name: "BS in Islamic Studies", level: "Undergraduate" },
      { name: "MPhil in Islamic Studies", level: "MS/MPhil" },
      { name: "MPhil in Arabic Studies", level: "MS/MPhil" },
      { name: "PhD in Islamic Studies", level: "PhD" },
    ],
    curriculum: [
      {
        title: "BS Islamic Studies Scheme of Studies Updated Fall 2025",
        url: "https://uswat.edu.pk/wp-content/uploads/2025/10/BS-Islamic-Studies-Scheme-of-Studies-Updated-Fall-2025.pdf",
      },
      {
        title: "MPhil Arabic Studies Scheme of Studies Updated Fall 2025",
        url: "https://uswat.edu.pk/wp-content/uploads/2025/10/MPhil-Arabic-Studies-Scheme-of-Studies-Updated-Fall-2025.pdf",
      },
      {
        title: "MPhil Islamic Studies Scheme of Studies Updated Fall 2025",
        url: "https://uswat.edu.pk/wp-content/uploads/2025/10/MPhil-Islamic-Studies-Scheme-of-Studies-Updated-Fall-2025.pdf",
      },
      {
        title: "PhD Islamic Studies Scheme of Studies Updated Fall 2025",
        url: "https://uswat.edu.pk/wp-content/uploads/2025/10/PhD-Islamic-Studies-Scheme-of-Studies-Updated-Fall-2025.pdf",
      },
    ],
    facultyMembers: [
      {
        name: "Dr. Muhammad Mushtaq Ahmad",
        title: "Associate Professor, Chairman",
        email: "mushtaq@uswat.edu.pk",
        image:
          "https://uswat.edu.pk/wp-content/uploads/2025/10/Dr.-Mushtaq-Ahmad-Assistant-Professor-Incharge-of-Department-150x150-removebg-preview.png",
      },
      {
        name: "Dr. Yahya Khan",
        title: "Assistant Professor",
        email: "yahya@uswat.edu.pk",
        image: "/faculty/Dr.-Yahya-Khan-Lecturer-150x150-removebg-preview.png",
      },
      {
        name: "Dr. Javed Khan",
        title: "Assistant Professor",
        email: "javedkhan@uswat.edu.pk",
        image: "/faculty/Dr.-Javed-Khan-Lecturer-150x150-1-e1759733549471.jpg",
      },
      {
        name: "Dr. Muhammad Noman",
        title: "Assistant Professor",
        email: "noman@uswat.edu.pk",
        image:
          "https://uswat.edu.pk/wp-content/uploads/2025/10/Latest-Photo-of-Dr.-Muhammad-Noman-Assistant-Professor-e1759398022634-150x150-removebg-preview.png",
      },
      {
        name: "Dr. Shafiqa Bushra",
        title: "Assistant Professor",
        email: "shafiqbushra@uswat.edu.pk",
        image:
          "https://uswat.edu.pk/wp-content/uploads/2020/01/214-2140811_computer-icons-woman-female-silhouette-female-silhouette-icon-150x150.png",
      },
      {
        name: "Dr. Zia Ud Din",
        title: "Assistant Professor",
        email: "zia@uswat.edu.pk",
        image: "/faculty/WhatsApp-Image-2025-11-24-at-14.28.36-150x150.jpeg",
      },
      {
        name: "Dr. Fazle Haq",
        title: "Lecturer",
        email: "fazlehaq@uswat.edu.pk",
        image: "/faculty/fazalHaq-e1722497329404-150x150.jpg",
      },
    ],
    contact: { email: "", office: "" },
  },
  {
    id: "pashto-local-languages",
    name: "Department of Pashto",
    sourceUrl: "https://uswat.edu.pk/department-of-pashto/",
    description:
      "Welcome to the Department of Pashto at University of Swat, where we celebrate the rich cultural heritage and linguistic diversity of the Pashtun people. Established with a vision to preserve, promote, and advance the Pashto language, literature, and culture, our department stands as a beacon of excellence in Pashto studies. Our mission is to foster a deep understanding and appreciation of Pashto language, literature, and culture among students, scholars, and the wider community. Through rigorous academic programs, innovative research initiatives, and vibrant cultural activities, we aim to equip our students with the knowledge, skills, and insights necessary to engage critically with Pashto literature and contribute meaningfully to its development.",
    vision:
      "Established with a vision to preserve, promote, and advance the Pashto language, literature, and culture, our department stands as a beacon of excellence in Pashto studies.",
    mission:
      "Our mission is to foster a deep understanding and appreciation of Pashto language, literature, and culture among students, scholars, and the wider community. Through rigorous academic programs, innovative research initiatives, and vibrant cultural activities, we aim to equip our students with the knowledge, skills, and insights necessary to engage critically with Pashto literature and contribute meaningfully to its development.",
    programs: [{ name: "BS in Pashto", level: "Undergraduate" }],
    curriculum: [{ title: "BS Pashto", url: "" }],
    facultyMembers: [
      {
        name: "Dr. Rafi Ullah",
        title: "In-charge",
        email: "rafiullah@uswat.edu.pk",
        image: "/faculty/WhatsApp-Image-2022-07-22-at-12.14.49-PM-150x149.jpeg",
      },
    ],
    contact: { email: "", office: "" },
  },
  {
    id: "law-shariah",
    name: "Department of Law & Shari'a",
    sourceUrl: "https://uswat.edu.pk/department-of-law-sharia/",
    description:
      "The Department of Law and Shari'a, University of Swat, is the 3rd of its kind in the entire country. It is the flagship Department of the University that is striving hard to enlighten the seeking minds not only with the religious knowledge but, also enrich them with the science of modern law. Students, after completing the degree shall have a thorough and correct understanding of Quran, Hadith, Fiqh and principals of Islamic Jurisprudence, besides preparing them to compete in the market as law practitioners. Law and Shari'a is a five-year degree programme aiming to attain the highest standards not only in academics but, also in research.",
    vision:
      "To make faculty of law and sharia a very distinctive center of excellence which will provide legal education and produce graduates having full grasp of sharia and common law principles.",
    mission: "To produce law graduates who are also to meet the challenges of today and tomorrow.",
    programs: [{ name: "BA LL.B (Law & Sharia'h)", level: "Undergraduate" }],
    curriculum: [
      {
        title: "Approved BOS and BOF with Crurriculam for Law and Shariah",
        url: "https://uswat.edu.pk/wp-content/uploads/2025/10/Approved-BOS-and-BOF-with-Crurriculam-for-Law-and-Shariah.pdf",
      },
    ],
    facultyMembers: [
      {
        name: "Mr. Amjad Hilal",
        title: "Associate Professor and Chairman",
        email: "amjadhilal@uswat.edu.pk",
        image: "/faculty/amjadhilal-e1759136720703-removebg-preview-150x150.png",
      },
      {
        name: "Dr. Lutfullah Saqib",
        title: "Professor",
        email: "lutfullahsaqib@uswat.edu.pk",
        image: "/faculty/lutfullah-removebg-preview.png",
      },
      {
        name: "Mr. Muhammad Islahuddin",
        title: "Assistant Professor",
        email: "m.islahuddin@uswat.edu.pk",
        image: "/faculty/isLah-e1759136834775-150x150.jpg",
      },
      {
        name: "Mr. Qazi Ubaidullah",
        title: "Assistant Professor",
        email: "obaidullah@uswat.edu.pk",
        image: "/faculty/ubaid-150x150-removebg-preview.png",
      },
      {
        name: "Ms. Nazish Inayat",
        title: "Lecturer",
        email: "nazish@uswat.edu.pk",
        image: "/faculty/214-2140811_computer-icons-woman-female-silhouette-female-silhouette-icon.png",
      },
      {
        name: "Ms. Kalsoom Bibi",
        title: "Lecturer",
        email: "kalsoom@uswat.edu.pk",
        image: "/faculty/214-2140811_computer-icons-woman-female-silhouette-female-silhouette-icon.png",
      },
    ],
    contact: { email: "law.sharia@uswat.edu.pk", office: "" },
  },
  {
    id: "urdu",
    name: "Department of Urdu",
    sourceUrl: "https://uswat.edu.pk/department-of-urdu/",
    description:
      "Welcome to the Department of Urdu, where we embrace the richness and diversity of the Urdu language, literature, and culture. Established with a commitment to fostering academic excellence and promoting cultural understanding, our department serves as a vibrant hub for Urdu studies and scholarship. Our mission is to cultivate a deep appreciation and understanding of Urdu language, literature, and culture among students, scholars, and the wider community. Through rigorous academic programs, innovative research endeavors, and dynamic cultural initiatives, we aim to equip our students with the knowledge, skills, and insights necessary to engage critically with Urdu literature and contribute meaningfully to its preservation and advancement.",
    vision: "",
    mission:
      "Our mission is to cultivate a deep appreciation and understanding of Urdu language, literature, and culture among students, scholars, and the wider community. Through rigorous academic programs, innovative research endeavors, and dynamic cultural initiatives, we aim to equip our students with the knowledge, skills, and insights necessary to engage critically with Urdu literature and contribute meaningfully to its preservation and advancement.",
    programs: [{ name: "BS in Urdu", level: "Undergraduate" }],
    curriculum: [{ title: "BS Urdu", url: "" }],
    facultyMembers: [
      {
        name: "Dr. Lala Rukh",
        title: "Associate Professor in Finance",
        email: "lalarukh@uswat.edu.pk",
        image: "/faculty/214-2140811_computer-icons-woman-female-silhouette-female-silhouette-icon.png",
      },
    ],
    contact: { email: "", office: "" },
  },
];
