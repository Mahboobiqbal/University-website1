export interface FacultyPublication {
  title: string;
  year?: string;
  journal?: string;
  url?: string;
}

export interface FacultyEducation {
  degree: string;
  institution: string;
  year?: string;
}

export interface FacultyExperience {
  role: string;
  organization: string;
  period?: string;
}

export interface FacultyMemberProfile {
  name: string;
  title: string;
  email: string;
  image: string;
  cvUrl?: string;
  biography?: string[];
  division?: string;
  officeLocation?: string;
  education?: FacultyEducation[];
  experience?: FacultyExperience[];
  researchInterests?: string[];
  publications?: FacultyPublication[];
}
