export interface DegreeProgramOption {
  id: string;
  code: string;
  name: string;
  faculty: string;
  level: "Undergraduate (BS)" | "Graduate (MS/MPhil)" | "Doctorate (PhD)";
  duration: string;
  eligibility: string;
  annualFee: number;
  admissionFee: number;
}

export const DEGREE_PROGRAMS: DegreeProgramOption[] = [
  // Computing & Computational Sciences
  {
    id: "bs-cs",
    code: "CS-BS",
    name: "BS Computer Science",
    faculty: "Physical, Numerical & Computational Sciences",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "FSc Pre-Engineering / ICS / General Science with Mathematics (Min 50%)",
    annualFee: 46000,
    admissionFee: 15000,
  },
  {
    id: "bs-se",
    code: "SE-BS",
    name: "BS Software Engineering",
    faculty: "Physical, Numerical & Computational Sciences",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "FSc Pre-Engineering / ICS with Mathematics (Min 50%)",
    annualFee: 48000,
    admissionFee: 15000,
  },
  {
    id: "bs-ai",
    code: "AI-BS",
    name: "BS Artificial Intelligence",
    faculty: "Physical, Numerical & Computational Sciences",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "FSc Pre-Engineering / ICS / Pre-Medical with Additional Maths (Min 50%)",
    annualFee: 48000,
    admissionFee: 15000,
  },
  {
    id: "bs-physics",
    code: "PHY-BS",
    name: "BS Physics",
    faculty: "Physical, Numerical & Computational Sciences",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "FSc Pre-Engineering with Physics & Mathematics (Min 45%)",
    annualFee: 42000,
    admissionFee: 12000,
  },
  {
    id: "bs-math",
    code: "MTH-BS",
    name: "BS Mathematics",
    faculty: "Physical, Numerical & Computational Sciences",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "FSc Pre-Engineering / ICS with Mathematics (Min 45%)",
    annualFee: 40000,
    admissionFee: 12000,
  },
  {
    id: "bs-stats",
    code: "STA-BS",
    name: "BS Statistics & Data Analytics",
    faculty: "Physical, Numerical & Computational Sciences",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "Intermediate with Mathematics/Statistics (Min 45%)",
    annualFee: 40000,
    admissionFee: 12000,
  },
  {
    id: "bs-geology",
    code: "GEO-BS",
    name: "BS Geology",
    faculty: "Physical, Numerical & Computational Sciences",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "FSc Pre-Engineering / Pre-Medical (Min 45%)",
    annualFee: 44000,
    admissionFee: 14000,
  },

  // Biological & Chemical Sciences
  {
    id: "bs-biotech",
    code: "BIOT-BS",
    name: "BS Biotechnology",
    faculty: "Biological & Chemical Sciences",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "FSc Pre-Medical (Min 50%)",
    annualFee: 48000,
    admissionFee: 15000,
  },
  {
    id: "bs-microbiology",
    code: "MIC-BS",
    name: "BS Microbiology",
    faculty: "Biological & Chemical Sciences",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "FSc Pre-Medical (Min 50%)",
    annualFee: 46000,
    admissionFee: 15000,
  },
  {
    id: "bs-chemistry",
    code: "CHM-BS",
    name: "BS Chemistry",
    faculty: "Biological & Chemical Sciences",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "FSc Pre-Medical / Pre-Engineering with Chemistry (Min 45%)",
    annualFee: 44000,
    admissionFee: 14000,
  },
  {
    id: "bs-zoology",
    code: "ZOO-BS",
    name: "BS Zoology",
    faculty: "Biological & Chemical Sciences",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "FSc Pre-Medical (Min 45%)",
    annualFee: 42000,
    admissionFee: 12000,
  },
  {
    id: "bs-botany",
    code: "BOT-BS",
    name: "BS Botany",
    faculty: "Biological & Chemical Sciences",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "FSc Pre-Medical (Min 45%)",
    annualFee: 42000,
    admissionFee: 12000,
  },
  {
    id: "bs-environmental",
    code: "ENV-BS",
    name: "BS Environmental Sciences",
    faculty: "Biological & Chemical Sciences",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "FSc Pre-Medical / Pre-Engineering (Min 45%)",
    annualFee: 42000,
    admissionFee: 12000,
  },

  // Management & Social Sciences
  {
    id: "bba-hons",
    code: "BBA-BS",
    name: "BBA (Hons) Business Administration",
    faculty: "Management, Art & Social Sciences",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "Intermediate FA/FSc/I.Com/ICS or equivalent (Min 45%)",
    annualFee: 45000,
    admissionFee: 15000,
  },
  {
    id: "bs-economics",
    code: "ECO-BS",
    name: "BS Economics & Development Studies",
    faculty: "Management, Art & Social Sciences",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "Intermediate with Economics/Mathematics or FSc (Min 45%)",
    annualFee: 38000,
    admissionFee: 12000,
  },
  {
    id: "bs-tourism",
    code: "THM-BS",
    name: "BS Tourism & Hospitality Management",
    faculty: "Management, Art & Social Sciences",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "FA/FSc or equivalent qualification (Min 45%)",
    annualFee: 40000,
    admissionFee: 12000,
  },
  {
    id: "bs-psychology",
    code: "PSY-BS",
    name: "BS Psychology",
    faculty: "Management, Art & Social Sciences",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "FA/FSc or equivalent (Min 45%)",
    annualFee: 40000,
    admissionFee: 12000,
  },

  // Humanities & Languages
  {
    id: "bs-english",
    code: "ENG-BS",
    name: "BS English Literature & Linguistics",
    faculty: "Religious, Languages, Humanities & Legal Studies",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "FA/FSc with English compulsory (Min 45%)",
    annualFee: 38000,
    admissionFee: 12000,
  },
  {
    id: "llb-5years",
    code: "LAW-LLB",
    name: "LLB (5 Years) Law & Shariah",
    faculty: "Religious, Languages, Humanities & Legal Studies",
    level: "Undergraduate (BS)",
    duration: "5 Years (10 Semesters)",
    eligibility: "FA/FSc or equivalent + LAT (Law Admission Test) with min 50% marks",
    annualFee: 55000,
    admissionFee: 18000,
  },
  {
    id: "bs-islamic",
    code: "ISL-BS",
    name: "BS Islamic Studies",
    faculty: "Religious, Languages, Humanities & Legal Studies",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "FA/FSc or Shahadat-ul-Aalia (Min 45%)",
    annualFee: 32000,
    admissionFee: 10000,
  },
  {
    id: "bs-pashto",
    code: "PAS-BS",
    name: "BS Pashto Literature & Cultural Heritage",
    faculty: "Religious, Languages, Humanities & Legal Studies",
    level: "Undergraduate (BS)",
    duration: "4 Years (8 Semesters)",
    eligibility: "FA/FSc or equivalent (Min 45%)",
    annualFee: 32000,
    admissionFee: 10000,
  },

  // Graduate Programs
  {
    id: "ms-cs",
    code: "CS-MS",
    name: "MS Computer Science",
    faculty: "Physical, Numerical & Computational Sciences",
    level: "Graduate (MS/MPhil)",
    duration: "2 Years (4 Semesters)",
    eligibility: "BS (CS/SE/IT) 4 years or equivalent with min 2.50/4.00 CGPA + GAT General",
    annualFee: 58000,
    admissionFee: 18000,
  },
  {
    id: "mphil-physics",
    code: "PHY-MPHIL",
    name: "MPhil Physics",
    faculty: "Physical, Numerical & Computational Sciences",
    level: "Graduate (MS/MPhil)",
    duration: "2 Years (4 Semesters)",
    eligibility: "BS Physics (4 Years) or MSc Physics with min 2.50 CGPA + GAT General",
    annualFee: 54000,
    admissionFee: 18000,
  },
];

export interface ApplicationFormData {
  // Step 1: Personal Details
  applicantName: string;
  fatherName: string;
  guardianName?: string;
  guardianRelation?: string;
  applicantCnic: string;
  fatherCnic: string;
  applicantDob: string;
  gender: "Male" | "Female" | "Other" | "";
  bloodGroup: string;
  domicileDistrict: string;
  applicantEmail: string;
  applicantPhone: string;
  fatherPhone: string;
  emergencyContact: string;
  permanentAddress: string;
  postalAddress: string;
  applicantPhotoName?: string;
  applicantPhotoBase64?: string;

  // Step 2: Academic Qualifications
  sscBoard: string;
  sscPassingYear: string;
  sscRollNo: string;
  sscTotalMarks: number | "";
  sscObtainedMarks: number | "";
  sscPercentage: number | "";

  hsscGroup: string;
  hsscBoard: string;
  hsscPassingYear: string;
  hsscRollNo: string;
  hsscTotalMarks: number | "";
  hsscObtainedMarks: number | "";
  hsscPercentage: number | "";
  hsscResultStatus: "Completed" | "Result Awaiting";

  otherQualifications?: string;

  // Step 3: Program Selection
  firstChoiceProgramId: string;
  secondChoiceProgramId?: string;
  thirdChoiceProgramId?: string;
  quotaCategory: "Open Merit" | "District Swat Quota" | "FATA / Merged Districts" | "Sports Quota" | "Disable Quota" | "Hafiz-e-Quran";
  hafizQuran: boolean;

  // Step 4: Fees & Payment
  applicationProcessingFee: number;
  prospectusFee: number;
  challanNumber: string;
  bankAccountTitle: string;
  bankAccountNumber: string;
  bankIban: string;
  bankBranch: string;
  paymentMethod: "Bank Deposit" | "Easypaisa" | "JazzCash" | "1Bill / Banking App" | "";
  transactionReferenceId: string;
  paymentDate: string;
  feeReceiptFileName?: string;
  feeReceiptFileBase64?: string;

  // Step 5 & 6: Review & Confirmation
  declarationAgreed: boolean;
  termsAgreed: boolean;
  submittedAt?: string;
  applicationId?: string;
}

export const INITIAL_APPLICATION_STATE: ApplicationFormData = {
  applicantName: "",
  fatherName: "",
  guardianName: "",
  guardianRelation: "",
  applicantCnic: "",
  fatherCnic: "",
  applicantDob: "",
  gender: "",
  bloodGroup: "",
  domicileDistrict: "Swat",
  applicantEmail: "",
  applicantPhone: "",
  fatherPhone: "",
  emergencyContact: "",
  permanentAddress: "",
  postalAddress: "",
  applicantPhotoName: "",
  applicantPhotoBase64: "",

  sscBoard: "BISE Saidu Sharif Swat",
  sscPassingYear: "2024",
  sscRollNo: "",
  sscTotalMarks: 1100,
  sscObtainedMarks: "",
  sscPercentage: "",

  hsscGroup: "Pre-Medical",
  hsscBoard: "BISE Saidu Sharif Swat",
  hsscPassingYear: "2026",
  hsscRollNo: "",
  hsscTotalMarks: 1100,
  hsscObtainedMarks: "",
  hsscPercentage: "",
  hsscResultStatus: "Completed",

  firstChoiceProgramId: "bs-cs",
  secondChoiceProgramId: "bs-se",
  thirdChoiceProgramId: "",
  quotaCategory: "Open Merit",
  hafizQuran: false,

  applicationProcessingFee: 1500,
  prospectusFee: 500,
  challanNumber: "UOS-2026-F-7842",
  bankAccountTitle: "Treasurer University of Swat - Admissions Account",
  bankAccountNumber: "0010023489110028",
  bankIban: "PK36HABIB00010023489110028",
  bankBranch: "Habib Bank Limited (HBL) Saidu Sharif Branch (Branch Code: 0142)",
  paymentMethod: "",
  transactionReferenceId: "",
  paymentDate: new Date().toISOString().split("T")[0],
  feeReceiptFileName: "",
  feeReceiptFileBase64: "",

  declarationAgreed: false,
  termsAgreed: false,
};
