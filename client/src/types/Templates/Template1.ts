export type Template1Props = {
  name: string;
  proffesionTitle: string;
  aboutMe: string;
  workExperience: WorkExperience[];
  skills: string[];
  contacts: Contact;
  education: Education;
  imageURL: string;
};

type Education = {
  name: string;
  university: string;
};

export type Contact = {
  phone: string;
  email: string;
  address: string;
  website: string;
};

type WorkExperience = {
  startDate: string;
  endDate: string;
  position: string;
  company: string;
  description: string;
};
