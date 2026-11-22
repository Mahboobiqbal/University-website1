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

export const DEPARTMENTS_CORE: DepartmentDetail[] = [
  {
    id: "physics",
    name: "Department of Physics",
    sourceUrl: "https://uswat.edu.pk/department_of_physics/",
    description:
      "Department of Physics provides the best possible education in the subject so that the students will utilize the knowledge of Physics in practical life which will be beneficial for the society. The primary aim of the programme is to produce broad-based graduates, able to face the challenges of the modern world. This programme will equip the students with firm foundation in principles of Physics and their applications. The graduates will be able to apply their knowledge of Physics for their professional growth and for obtaining further Higher Education in specialized fields of Physics.",
    vision:
      "The main objective of starting Physics programme is to impart students with a conceptual understanding of the fundamental principles of physics, natural laws and their interpretation, as well as mathematical formulation of the physical phenomena in nature. It is aimed to develop the critical skills of the students necessary for solving problems from their physical surroundings and to instill a deep appreciation of the need for optimum utilization of natural resources and environment.",
    mission:
      "To produce well trained graduates and researchers capable enough to address the future challenges both at regional and international levels. Apart from teaching, our mission is to cultivate an enthusiastic research culture by establishing laboratories equipped with sophisticated research facilities and establishing strong collaborations with other national and international institutions.",
    programs: [
      { name: "BS in Physics", level: "Undergraduate" },
      { name: "MS/M-Phil in Physics", level: "MS/MPhil" },
    ],
    curriculum: [
      {
        title: "BS Physics Fall 2021 onwards",
        url: "https://uswat.edu.pk/wp-content/uploads/2024/02/BS-Physics-BOS-file-for-fall-2021-onwards-UOswat.pdf",
      },
      {
        title: "MPhil & PhD",
        url: "https://uswat.edu.pk/wp-content/uploads/2024/02/MPhilPhD-BOS-File-Physics-UOSwat.pdf",
      },
    ],
    facultyMembers: [
      {
        name: "Dr. Kefayat Ullah",
        title: "Associate Professor / Chairman",
        email: "kefsayed@uswat.edu.pk",
        image: "https://uswat.edu.pk/wp-content/uploads/2022/09/kifayat-150x150.jpeg",
      },
      {
        name: "Dr. Amin Ur Rashid",
        title: "Associate Professor",
        email: "amin_physics@uswat.edu.pk",
        image: "https://uswat.edu.pk/wp-content/uploads/2019/09/WhatsApp-Image-2021-06-03-at-1.34.34-PM-e1622711798451-150x150.jpeg",
      },
      {
        name: "Dr. Fazli Hadi",
        title: "Associate Professor",
        email: "hadiphysics@uswat.edu.pk",
        image: "https://uswat.edu.pk/wp-content/uploads/2019/09/WhatsApp-Image-2021-06-03-at-1.34.47-PM-e1622711879133-150x150.jpeg",
      },
      {
        name: "Dr. Salah Uddin",
        title: "Assistant Professor",
        email: "",
        image: "https://uswat.edu.pk/wp-content/uploads/2022/10/Dr.-Salah-Uddin-Pic-150x150.png",
      },
      {
        name: "Dr. Rafi ud Din",
        title: "Assistant Professor",
        email: "rafiuddin@uswat.edu.pk",
        image: "https://uswat.edu.pk/wp-content/uploads/2025/09/11-e1758609573745-150x150.jpg",
      },
    ],
    contact: { email: "", office: "Department of Physics, Main Campus at Charbagh" },
  },
  {
    id: "archaeology",
    name: "Department of Archaeology",
    sourceUrl: "https://uswat.edu.pk/department-of-archaeology/",
    description:
      "The concept of exploration, documentation and excavation of the archaeological heritage of Indo-Pakistan region originated in the 18th century. As the Swat Valley is exceptionally rich in archaeological remains, spanning from prehistoric times to the early Islamic era, the University of Swat launched a BS degree program in this discipline under the umbrella of the Institute of Cultural Heritage, Tourism and Hospitality in 2018. In 2025, the Institute was bifurcated into the Department of Tourism and Hospitality and the Department of Archaeology, which formally started academic activities from fall semester 2025.",
    vision:
      "To become a leading department in archaeological research, education, and heritage management in Pakistan, with a special focus on the Swat Valley and the wider Indo-Pakistan region, by fostering global collaborations, advancing innovative methods of exploration, excavation, and conservation, and contributing to the preservation of cultural heritage for future generations.",
    mission:
      "To prepare skilled professionals in Archaeology and Cultural Heritage Management, equip students with advanced knowledge for the protection and promotion of the region's cultural resources, integrate the cultural heritage sector with the tourism industry, and build professional competencies in exploration, documentation, excavation, and conservation of archaeological sites and monuments of Pakistan.",
    programs: [{ name: "BS Archaeology", level: "Undergraduate" }],
    curriculum: [
      {
        title: "Scheme of studies BS Archaeology, Fall 2025",
        url: "https://uswat.edu.pk/wp-content/uploads/2025/10/Scheme-of-studies-BS-Archaeology-Fall-2025-1.pdf",
      },
    ],
    facultyMembers: [
      {
        name: "Dr. Zarawar Khan",
        title: "Assistant Professor / In-charge",
        email: "zarawarkhan@uswat.edu.pk",
        image: "https://uswat.edu.pk/wp-content/uploads/2021/01/DSC_0100-copy-150x150.jpg",
      },
      {
        name: "Mr. Muhammad Waliullah",
        title: "Lecturer",
        email: "mwali@uswat.edu.pk",
        image: "https://uswat.edu.pk/wp-content/uploads/2021/03/wali-_Photo-e1616591551465-139x150.jpg",
      },
    ],
    contact: {
      email: "",
      office: "Department of Archaeology, Academic Block B, Main Campus, Charbagh, Swat",
    },
  },
  {
    id: "allied-health-sciences",
    name: "Faculty of Allied Health Sciences",
    sourceUrl: "https://uswat.edu.pk/faculty/",
    description:
      "The establishment of the Faculty of Allied Health Sciences, University of Swat was approved in the 9th meeting of the Senate of the University of Swat. Four different departments are working under this faculty, offering a diverse array of degree programs. The main objective of the study programs is to equip graduates with up-to-date knowledge and skills necessary for handling patients and health-related emergency situations professionally by following national and international standards and ethical practices.",
    vision:
      "The Faculty of Allied Health Sciences is determined to develop a skilled workforce to contribute to the national and knowledge economy of the country.",
    mission:
      "Study programs in the Faculty of Allied Health Sciences are designed to educate students on the basic and advanced technologies related to Allied Health Sciences. The skilled graduates will contribute to the healthcare sector both nationally and internationally.",
    programs: [
      { name: "BS Medical Laboratory Technology (MLT)", level: "Undergraduate" },
      { name: "BS Dental Technology", level: "Undergraduate" },
      { name: "Doctor of Physical Therapy (DPT)", level: "Undergraduate" },
      { name: "BS Radiography & Imaging Technology", level: "Undergraduate" },
    ],
    curriculum: [],
    facultyMembers: [
      {
        name: "Dr. Ali Akbar",
        title: "Professor & Focal Person",
        email: "aliakbar@uswat.edu.pk",
        image: "https://uswat.edu.pk/wp-content/uploads/2023/09/Ali-Akbar-Picture-150x150.jpg",
      },
      {
        name: "Dr. Nasib Zaman",
        title: "Associate Professor",
        email: "nasibzaman@uswat.edu.pk",
        image: "https://uswat.edu.pk/wp-content/uploads/2020/03/nasibzaman-202x300.png",
      },
      {
        name: "Dr. Zafar Ali",
        title: "Assistant Professor",
        email: "zafar@uswat.edu.pk",
        image: "https://uswat.edu.pk/wp-content/uploads/2019/09/Zafar-Ali_-002-e1621578610164-150x150.jpg",
      },
    ],
    contact: { email: "aliakbar@uswat.edu.pk", office: "Faculty of Allied Health Sciences, Main Campus, Charbagh" },
  },
];
