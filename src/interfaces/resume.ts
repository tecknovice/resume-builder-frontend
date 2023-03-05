export interface Information {
  name?: string;
  email?: string;
  mobile?: string;
  github?: string;
  linkedIn?: string;
}

export interface Experience {
  jobTitle?: string;
  company?: string;
  period?: string;
  jobDescriptions?: string[];
}

export interface Education {
  university?: string;
  faculty?: string;
  gpa?: number;
}

export interface Skill {
  name?: string;
}

export interface Resume {
  information?: Information;
  summary?: string;
  experiences?: Experience[];
  education?: Education[];
  skills?: Skill[];
}
