export interface FacultyPublication {
  title: string;
  year?: string;
  journal?: string;
  url?: string;
}

export interface FacultyMemberProfile {
  name: string;
  title: string;
  email: string;
  image: string;
  cvUrl?: string;
  researchInterests?: string[];
  publications?: FacultyPublication[];
}
