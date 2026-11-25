export interface ComplaintRecipient {
  id: string;
  label: string;
  email: string;
  description: string;
}

export interface ComplaintCategory {
  id: string;
  label: string;
}

export const COMPLAINT_RECIPIENTS: ComplaintRecipient[] = [
  {
    id: "registrar",
    label: "Registrar Office",
    email: "registrar@uswat.edu.pk",
    description: "Records, certificates, transfers and student documentation",
  },
  {
    id: "examinations",
    label: "Controller of Examinations",
    email: "controller@uswat.edu.pk",
    description: "Exams, results, transcripts and result cards",
  },
  {
    id: "admissions",
    label: "Admissions Office",
    email: "admissions@uswat.edu.pk",
    description: "Admission, merit list and enrolment issues",
  },
  {
    id: "provost",
    label: "Provost Office (Student Welfare & Hostels)",
    email: "provost@uswat.edu.pk",
    description: "Hostels, residential facilities and student welfare",
  },
  {
    id: "department",
    label: "Department of Computer & Software Technology",
    email: "dcst@uswat.edu.pk",
    description: "Departmental classes, faculty and lab concerns",
  },
  {
    id: "library",
    label: "Central Library",
    email: "librarian@uswat.edu.pk",
    description: "Library services, books and digital resources",
  },
  {
    id: "it",
    label: "IT & Website Support",
    email: "webmaster@uswat.edu.pk",
    description: "Email, portal, network and website problems",
  },
  {
    id: "general",
    label: "General Enquiries / Other",
    email: "info@uswat.edu.pk",
    description: "Anything else or if you are unsure who to contact",
  },
];

export const COMPLAINT_CATEGORIES: ComplaintCategory[] = [
  { id: "academic", label: "Academic / Teaching" },
  { id: "examination", label: "Examination / Result" },
  { id: "admission", label: "Admission / Fee" },
  { id: "hostel", label: "Hostel / Campus Facility" },
  { id: "library-it", label: "Library / IT Service" },
  { id: "conduct", label: "Behaviour / Harassment" },
  { id: "website", label: "Website / Technical Issue" },
  { id: "other", label: "Other" },
];
