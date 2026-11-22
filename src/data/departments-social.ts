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

export const DEPARTMENTS_SOCIAL: DepartmentDetail[] = [
  {
    id: "economics-development-studies",
    name: "Department of Economics and Development Studies",
    sourceUrl: "https://uswat.edu.pk/department-of-economics-and-development-studies/",
    description: "Pakistan in general and Khyber Pakhtunkhwa in particular is facing various challenges such as lack of good governance, population explosion, poverty, conflict, Water-Food-Energy insecurity, climate change, biodiversity loss, depletion of natural capital, lack of quality and standards and lack of macroeconomic instability. To solve such issues, the academic and research institutions play important role in suggesting options. The Department of Economics and Development Studies (DEDS) in the University of Swat has the potential to design and teach courses alongwith conducting free inquiry into the real world issues of domestic and international domain. The DEDS is one of the pioneer Departments of University of Swat and the graduates of this department are either perusing their higher studies in prestigious institutions or serving in many private and public sector organizations.",
    vision: "To impart quality education in the fields of Economics and Development studies and to excel in the field of research at par with the reputed international institutions followed by establishing linkages with national and international institutions.",
    mission: "To develop critical thinking among the students and enabling them to take informed decisions in the practical life is the prime responsibility of the DEDS. Moreover, the students would be engaged in seminars, trainings, workshops and research activities to keep them updated and well prepared for any job of responsibility assigned to them in future.",
    programs: [
      { name: "BS in Economics", level: "Undergraduate" },
      { name: "BS in Development Studies", level: "Undergraduate" },
    ],
    curriculum: [
      { title: "BS in Economics", url: "https://uswat.edu.pk/wp-content/uploads/2020/01/BS-Economics-10-Updated.pdf" },
      { title: "BS Development Studies", url: "https://uswat.edu.pk/wp-content/uploads/2024/01/Curriculum-BSDS-.pdf" },
    ],
    facultyMembers: [
      { name: "Dr. Anwar Hussain", title: "Professor and DEAN", email: "anwar@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/08/Anwar-Hussain-150x150.jpg" },
      { name: "Dr. Umar Hayat", title: "Professor and Chairman", email: "umarhayat@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2026/01/Screenshot-3-e1767949243305-150x150.png" },
      { name: "Dr. Shahid Ali", title: "Associate Professor", email: "shahid@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/12/WhatsApp-Image-2024-11-29-at-14.47.35-150x150.jpeg" },
      { name: "Dr. Fazal Rabbi", title: "Assistant Professor", email: "rabbi.fazli@gmail.com", image: "https://uswat.edu.pk/wp-content/uploads/2024/12/fr-e1733990219111-150x150.jpg" },
      { name: "Dr. Muhammad Imad Khan", title: "Lecturer", email: "imad@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/12/395637343_358642223205555_6878200977664397541_n-e1733990139556-150x150.jpg" },
      { name: "Mr. Jawad Mohammad", title: "Lecturer", email: "jawad@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/11/paspport-size-final-larg.jpg" },
      { name: "Mr. Tariq Ziad Khwaja", title: "Lecturer", email: "tariqziad@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/04/tariq-ziad-150x150.webp" },
      { name: "Dr. Naveed Ali", title: "Lecturer", email: "naveedali@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2020/02/1-1.jpg" },
    ],
    contact: { email: "deds@uswat.edu.pk", office: "" },
  },
  {
    id: "tourism-hospitality",
    name: "Department of Tourism and Hospitality",
    sourceUrl: "https://uswat.edu.pk/department-of-tourism-and-hospitality/",
    description: "The Department of Tourism and Hospitality at the University of Swat is dedicated to shaping the future leaders of the global tourism and hospitality industry. Nestled in the heart of the scenic Swat Valley, the department leverages the region's natural beauty and cultural richness as a living laboratory for learning, research, and innovation. Our programs emphasize a balance of academic rigor and practical experience, equipping students with the knowledge, skills, and global perspective required to excel in one of the world's fastest-growing industries. With a strong focus on sustainable tourism, hospitality excellence, culinary innovation, and destination development, the department prepares graduates to thrive in diverse professional pathways ranging from international hotel management and travel operations to event management and tourism entrepreneurship.",
    vision: "To be recognized as a leading center of excellence in tourism and hospitality education, research, and innovation, producing globally competitive graduates who promote sustainable tourism, celebrate cultural diversity, and advance the hospitality industry at national and international levels.",
    mission: "The Department of Tourism and Hospitality at the University of Swat is committed to providing world-class education that blends academic rigor with practical experience in tourism and hospitality by fostering innovation, leadership, and entrepreneurship to prepare graduates for dynamic roles in the global industry.",
    programs: [
      { name: "BS Tourism and Hospitality", level: "Undergraduate" },
      { name: "BS Culinary Arts", level: "Undergraduate" },
    ],
    curriculum: [],
    facultyMembers: [
      { name: "Dr. Aatif Iqbal", title: "Assistant Professor & In-charge", email: "aatif@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/01/Aatifs-Pic-e1705903764822-150x150.jpg" },
      { name: "Mr. Farhad Nazir", title: "Lecturer", email: "farhad@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/08/IMG_20220603_111821-1-1-150x150.jpg" },
    ],
    contact: { email: "dth@uswat.edu.pk", office: "" },
  },
  {
    id: "management-commerce",
    name: "Department of Management and Commerce",
    sourceUrl: "https://uswat.edu.pk/department-of-management-commerce/",
    description: "The Department of Management and Commerce strives to set up the societal narrative and discourse in the right direction through provision of outstanding teaching, conduct of relevant research and advisory support to local industry in the catchment area of District Swat. The Department of Management and Commerce at University of Swat, endeavors to align the paradoxical expectations of industry and academia by filling the social vacuum through practice-oriented degree programs at bachelors, Masters and PhD levels. The degree programs of BBA, MBA, MS and PhD offered at Department of Management and Commerce focuses on offering a complete set of expertise in domains of Human Resource Management, Entrepreneurship, Finance and Marketing with an emphasis on digitization in line with University of Swat declaration of 2023 as digital year. The department strives to create owner managers and entrepreneurs with value creation competencies.",
    vision: "Our vision is to nurture second to none graduates by acting as a springboard for students to achieve their true potential. The essence of our vision and mission statements is best espoused in our credo statement \"Technological at heart, Inventive in mind and socially responsible in action\".",
    mission: "The Mission of the Department of Management and Commerce, University of Swat revolves around development of wholesome individuals through integration of a unique blend of curricular, co-curricular and extracurricular activities to combat the issue of credential creep and educational inflation. Our mission is to create value creating individuals who create value for themselves and value for others in the form of useful contributions to triple helix stakeholders (Academia, Industry & Government).",
    programs: [
      { name: "Bachelor of Business Administration (Hons)", level: "Undergraduate" },
      { name: "BS Digital Marketing", level: "Undergraduate" },
      { name: "BS Business Analytics", level: "Undergraduate" },
      { name: "BS Accounting and Finance", level: "Undergraduate" },
      { name: "BS Islamic Banking and Finance", level: "Undergraduate" },
      { name: "Master of Business Administration (MBA) for Business Stream -35 credit hours", level: "MS/MPhil" },
      { name: "Executive Master of Business Administration (EMBA) for Non-Business Stream - 65 Credit Hours", level: "MS/MPhil" },
      { name: "Executive Master of Business Administration (EMBA) for Business Stream -35 credit hours", level: "MS/MPhil" },
      { name: "Master of Business Administration (MBA) for Non-Business Stream - 65 Credit Hours", level: "MS/MPhil" },
      { name: "MS in Management Sciences", level: "MS/MPhil" },
      { name: "PhD in Management Sciences", level: "PhD" },
    ],
    curriculum: [
      { title: "Bachelor of Business Administration BBA (Hons) 2022", url: "https://uswat.edu.pk/wp-content/uploads/2025/01/BBA-01.pdf" },
      { title: "BS Digital Marketing", url: "https://uswat.edu.pk/wp-content/uploads/2025/10/BS-Digital-Marketing.pdf" },
      { title: "BS Business Analytics", url: "https://uswat.edu.pk/wp-content/uploads/2025/10/BS-Business-Analytics.pdf" },
      { title: "BS Accounting and Finance", url: "https://uswat.edu.pk/wp-content/uploads/2025/10/BS-Accounting-and-Finance.pdf" },
      { title: "Bachelor of Business Administration (BBA) 2025", url: "https://uswat.edu.pk/wp-content/uploads/2025/10/Bachelor-of-Business-Administration-BBA.pdf" },
    ],
    facultyMembers: [
      { name: "Dr. Hazrat Bilal", title: "Director / Professor", email: "hbilal@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-05-at-00.09.51_4a968e7e-150x150.jpg" },
      { name: "Dr. Nasir Shaheen", title: "Associate Professor", email: "nasirshaheen@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/picture-150x150.jpeg" },
      { name: "Dr. Muhammad Tariq", title: "Associate Professor", email: "muhammadtariq@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2023/11/tariq.jpg" },
      { name: "Dr. Lala Rukh", title: "Associate Professor in Finance", email: "lalarukh@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2020/01/214-2140811_computer-icons-woman-female-silhouette-female-silhouette-icon.png" },
      { name: "Dr. Badshah Hussain", title: "Assistant Professor", email: "badshah@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/01/Dr-Badshah-Hussain-150x150.jpg" },
      { name: "Dr. Jawad Karamat", title: "Assistant Professor", email: "jkaramat@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2024/02/Jawad-Pic-e1707721011217-150x150.jpg" },
      { name: "Dr. Abdul Mateen", title: "Lecturer in Human Resource Management", email: "abdulmateen@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/mateen-1-150x150.jpg" },
      { name: "Dr. Neelam Akbar Marwat", title: "Lecturer in Marketing", email: "neelammarwat@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2020/01/214-2140811_computer-icons-woman-female-silhouette-female-silhouette-icon.png" },
    ],
    contact: { email: "cmc@uswat.edu.pk", office: "" },
  },
  {
    id: "pakistan-studies",
    name: "Department of Pakistan Studies",
    sourceUrl: "https://uswat.edu.pk/department_of_pakistan_studies/",
    description: "Department of Pakistan Studies is a newly established multi-disciplinary department at the University of Swat. The Centre aims to provide excellence in the Area Studies, especially Caucasia, Asia and China. At present the Centre has started Master and BS Degree programs in the discipline of Pakistan Studies. Pakistan Studies deals with the courses from other social sciences including but not limited to Political Science, International Relations, Geography, History, Law, Arts and Languages, Economics, Sociology & Socio-cultural Anthropology, Philosophy and Comparative Religions.",
    vision: "Department of Pakistan Studies, University of Swat offers quality education about Land and People of Pakistan to its students. Using state of the art academic skills, robust and rigorous research practices, it offers a multidisciplinary program in Pakistan Studies.",
    mission: "Department of Pakistan Studies, University of Swat aspires to educate, train and produce highly skilled and excellently endowed scholars in the field of Pakistan Studies and related areas. It aspires to promote a culture of excellent research and quality education.",
    programs: [
      { name: "BS in Pakistan Studies", level: "Undergraduate" },
    ],
    curriculum: [
      { title: "BS in Pakistan Studies", url: "https://uswat.edu.pk/wp-content/uploads/2020/01/Pakistan-Studies-2012-13.pdf" },
      { title: "BS Pakistan Studies (2019)", url: "https://uswat.edu.pk/wp-content/uploads/2019/09/final-Scheme-of-studies-for-BS-MSc-Pakistan-Studies-Printed-with-correction-for-Political-History-of-Pakistan.pdf" },
    ],
    facultyMembers: [
      { name: "Dr. Sarfaraz Khan", title: "Assistant Professor & In-charge", email: "sarfarazkhan@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/pp-5-150x150.jpg" },
      { name: "Mr. Zahid Nasir", title: "Lecturer", email: "zahidnasir@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2023/03/zn-150x150.jpg" },
    ],
    contact: { email: "", office: "" },
  },
  {
    id: "media-communication-studies",
    name: "Department of Media and Communication Studies",
    sourceUrl: "https://uswat.edu.pk/department-of-media-and-communication-studies/",
    description: "Journalism around the world is in a state of rapid evolution. The lines between print, broadcast and online journalism are being erased. Reporters are increasingly required to produce stories for all the media platforms, as well as reproducing it for mobile communications. Pakistan's journalism departments/schools are uniquely positioned to take their place at the forefront of this reform movement. Thus, the Department of Media & Communication Studies, University of Swat has designed degree programs in Media & Communication Studies to equip students with advanced theoretical knowledge and practical skills, fostering critical thinking, media literacy, storytelling, and research to address the evolving landscape of media and communication.",
    vision: "To provide best possible quality education in Journalism & Mass Communication in the country.",
    mission: "The mission of the Department of Media & Communication Studies is to serve the country by producing qualified and skilled journalists and scholars, who can meet the market demand.",
    programs: [
      { name: "BS Media & Communication Studies", level: "Undergraduate" },
      { name: "MS in Media & Communication Studies", level: "MS/MPhil" },
    ],
    curriculum: [],
    facultyMembers: [
      { name: "Dr. Jamal ud Din", title: "Chairman, Associate Professor", email: "jamaluddin@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2022/07/Jamal-pic-150x150.jpg" },
      { name: "Dr. Rafi Ullah", title: "Lecturer/Station Manager/PRO", email: "rafiullah@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-22-at-12.14.49-PM-150x149.jpeg" },
      { name: "Mr. Khayam Hassan", title: "Lecturer (on study leave)", email: "Khayam@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2023/05/Khayam-Hassan-150x150.jpg" },
      { name: "Ms. Sadia Younus", title: "Lecturer (on study leave)", email: "sadiayounus@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2023/05/Sadia-150x150.jpg" },
      { name: "Mr. Khalid Khan", title: "Assistant Professor (on study leave)", email: "khalid.khan@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2023/05/Khalid-150x150.jpg" },
    ],
    contact: { email: "mediastudies@uswat.edu.pk", office: "Academic Block A, University of Swat" },
  },
  {
    id: "social-gender-studies",
    name: "Department of Social and Gender Studies",
    sourceUrl: "https://uswat.edu.pk/department-of-social-and-gender-studies/",
    description: "The Department of Social and Gender Studies encompasses multidisciplinary approach in social sciences that extends from orthodox sociological theories to heterodox sociological concepts. This multidisciplinary approach provides students a unique environment to be trained and educated with their natural potential recognized and unleashed. We do not focus only on conventional methods of learning rather facilitate students the way they are interested in. They are equipped with the skills and commitment to contribute to local and global development process.",
    vision: "Facilitating students more practically to understand the social world in a positive and better way.",
    mission: "To contribute to the society at local and international level with more devotion to humanity, belief, peace and harmony.",
    programs: [
      { name: "BS Sociology", level: "Undergraduate" },
      { name: "BS Criminology", level: "Undergraduate" },
      { name: "Master of Philosophy in Sociology", level: "MS/MPhil" },
      { name: "PhD in Sociology", level: "PhD" },
    ],
    curriculum: [
      { title: "PhD in Sociology", url: "https://uswat.edu.pk/wp-content/uploads/2025/01/PhD_SOCIOLOGY.pdf" },
      { title: "Master of Philosophy in Sociology", url: "https://uswat.edu.pk/wp-content/uploads/2025/01/MPhil._SOCIOLOGY.pdf" },
      { title: "BS Sociology", url: "https://uswat.edu.pk/wp-content/uploads/2025/01/BS-Sociology-2024.pdf" },
      { title: "BS Criminology", url: "https://uswat.edu.pk/wp-content/uploads/2026/07/17.11.2025-Final-BoS-BS-Criminology.docx" },
    ],
    facultyMembers: [
      { name: "Dr. Ihsan Ullah Khan", title: "In-charge, Assistant Professor in Sociology", email: "ihsanullah@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2023/04/Ihsan-Pic-1-150x150.jpg" },
      { name: "Dr. Sheraz Ali", title: "Assistant Professor in Sociology", email: "sheraz@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/WhatsApp-Image-2021-12-29-at-3.02.49-PM.jpeg" },
      { name: "Dr. Imran", title: "Assistant Professor in Sociology", email: "imran_sociologist@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/WhatsApp-Image-2020-10-11-at-3.00.41-PM-e1622632499632-133x150.jpeg" },
      { name: "Dr. Abdullah", title: "Assistant Professor in Social Work", email: "", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/pp-e1622713356233-150x149.jpg" },
      { name: "Dr. Muhammad Asghar Khan", title: "Assistant Professor in Sociology", email: "asgharsocio@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/Soc1-228x300-e1622632583136-150x150.jpg" },
    ],
    contact: { email: "deptsgs@uswat.edu.pk", office: "Academic Block-B, University of Swat" },
  },
  {
    id: "psychological-studies",
    name: "Department of Psychological Studies",
    sourceUrl: "https://uswat.edu.pk/department-of-psychological-studies/",
    description: "The aim to open Department of Psychological Studies at University of Swat is to develop in students those qualities, which fit them to fill worthily their places in their homes and in society. The Department of Psychological Studies has been functioning since 17th October, 2012. BS program was offered in the beginning. The department is in its initial period and besides developing in our students the understanding of psychology both practically and theoretically, we focus on the inculcation of moral grooming as well as integrity.",
    vision: "",
    mission: "",
    programs: [
      { name: "BS in Psychology", level: "Undergraduate" },
    ],
    curriculum: [
      { title: "BS in Psychology", url: "https://uswat.edu.pk/wp-content/uploads/2025/01/BS-Psychology-4th-Board-of-Studies-2024-Updated-after-BoF.pdf" },
    ],
    facultyMembers: [
      { name: "Ms.Palwasha Rahim", title: "Lecturer/In-Charge", email: "palwasharahim@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2020/01/214-2140811_computer-icons-woman-female-silhouette-female-silhouette-icon.png" },
      { name: "Dr. Faheem Ud Din", title: "Lecturer", email: "faheem@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2023/09/Faheem-2023-e1694064044187-150x150.jpg" },
      { name: "Ms. Roya Shahhiman Zada", title: "Lecturer", email: "royashahhiman@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2020/01/214-2140811_computer-icons-woman-female-silhouette-female-silhouette-icon.png" },
    ],
    contact: { email: "", office: "" },
  },
  {
    id: "education-staff-training",
    name: "Department of Education and Staff Training",
    sourceUrl: "https://uswat.edu.pk/department_of_education_and_staff_training/",
    description: "Department of Education and Staff Training was established on the directives of honorable Vice Chancellor in 2010. The Department was established to cater to the needs of prospective schools teachers and university faculty, through offering pre-service teacher education programs and training. The Department currently is offering B.Ed (4-Year) since 2010, Associate Degree in Education (2-Year) and MPhil Education since spring 2019. Further, the Centre is planned to launch PhD programme from Spring 2025, so as to provide the opportunity of higher education to the masses of Swat in particular and Khyber Pakhtunkhwa in general irrespective of gender cast and creed.",
    vision: "The vision of Department of Education and Staff Training is to work for a sustainable and peaceful society, through quality education, relevant training and highly educated graduate in close liaison with the community.",
    mission: "Since education by its very nature is emancipatory, therefore, through will qualified and skillful faculty and staff members. The Centre is striving to produce quality graduate who can be the positive agents of change.",
    programs: [
      { name: "B.Ed (Hons)", level: "Undergraduate" },
      { name: "ADE (2-Year)", level: "Undergraduate" },
      { name: "MPhil (Education)", level: "MS/MPhil" },
      { name: "PhD in Education", level: "PhD" },
    ],
    curriculum: [
      { title: "M.Phil and PhD Scheme of Studies 2025 and onward", url: "https://uswat.edu.pk/wp-content/uploads/2025/09/M.Phil-and-PhD-Scheme-of-Studies-2025-and-onward.pdf" },
      { title: "Scheme of Studies B.Ed 4 year and B.Ed 1.5", url: "https://uswat.edu.pk/wp-content/uploads/2025/09/Scheme-of-Studies-B.Ed-4-year-and-B.Ed-1.5.pdf" },
    ],
    facultyMembers: [
      { name: "Dr. Nasir Ahmad", title: "Director, Associate Professor", email: "nasir_cupid@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2020/05/DrNasir_Ahmad-150x150.jpg" },
      { name: "Dr. Farooq Nawaz Khan", title: "Associate Professor", email: "farooq@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2019/09/WhatsApp-Image-2021-06-02-at-6.19.23-PM-e1622712293310-150x150.jpeg" },
      { name: "Dr. Sajjad Hussain", title: "Associate Professor", email: "sajjadhussain@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2025/09/Dr.-Sajjad-Hussain-e1759208971642-150x147.jpeg" },
      { name: "Dr. Maryam Imad", title: "Lecturer", email: "maryam@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2020/01/214-2140811_computer-icons-woman-female-silhouette-female-silhouette-icon.png" },
      { name: "Dr. Alam Zeb", title: "Assistant Professor", email: "alamzeb@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2025/09/Dr.-Alam-Zeb-150x150.jpeg" },
      { name: "Ms. Sadarat", title: "Lecturer", email: "sadarat@uswat.edu.pk", image: "https://uswat.edu.pk/wp-content/uploads/2020/01/214-2140811_computer-icons-woman-female-silhouette-female-silhouette-icon.png" },
    ],
    contact: { email: "cest@uswat.edu.pk", office: "" },
  },
  {
    id: "hunerkada",
    name: "Hunerkada (Center of Excellence for Art & Culture)",
    sourceUrl: "https://uswat.edu.pk/hunerkada-center-for-excellence/",
    description: "The Hunerkada Center of Excellence at the University of Swat was launched as a significant milestone in the university's journey towards academic excellence. Initially, it is offering two bachelor's programs: Bachelor of Fine Arts and Bachelor of Design. The establishment of the center is a testament to the university's commitment to fostering creativity, innovation, and artistic expression. This center will serve as a hub for art lovers, providing a platform for them to explore their talents and reach new heights.",
    vision: "",
    mission: "",
    programs: [
      { name: "Bachelor of Fine Arts (BFA) 4-Year Degree Programme", level: "Undergraduate" },
      { name: "Bachelor of Design (BDes) 4-Year Degree Programme", level: "Undergraduate" },
    ],
    curriculum: [
      { title: "HEC CURRICULUM OF FINE ARTS AND DESIGN", url: "https://uswat.edu.pk/wp-content/uploads/2024/08/HEC-CURRICULUM-OF-FINE-ARTS-Draft.pdf" },
    ],
    facultyMembers: [
      { name: "Ms. Amna Shah", title: "Director, Hunerkada, Islamabad", email: "", image: "https://uswat.edu.pk/wp-content/uploads/2024/08/Amna-Shah-150x150.jpg" },
      { name: "Prof. Bashir Ahmad", title: "Eminent international Artists, Educationist", email: "", image: "https://uswat.edu.pk/wp-content/uploads/2024/08/Bashir-Ahmad-150x150.jpg" },
      { name: "Ms. Attiya Zafar", title: "HR & Student's Coordinator", email: "", image: "https://uswat.edu.pk/wp-content/uploads/2024/08/AttiaZafar-150x150.jpg" },
    ],
    contact: { email: "hunerkada@uswat.edu.pk", office: "" },
  },
];
