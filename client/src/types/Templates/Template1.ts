import { z } from "zod";

const EducationSchema = z.object({
  name: z.string(),
  university: z.string(),
});

const ContactTypeZod = z.object({
  phone: z.string(),
  email: z.string(),
  address: z.string(),
  website: z.string(),
});

const WorkExperienceSchema = z.object({
  startDate: z.string(),
  endDate: z.string(),
  position: z.string(),
  company: z.string(),
  description: z.string(),
});

export const Template1PropsZod = z.object({
  name: z.string(),
  proffesionTitle: z.string(),
  aboutMe: z.string(),
  workExperience: z.array(WorkExperienceSchema),
  skills: z.array(z.string()),
  contacts: ContactTypeZod,
  education: EducationSchema,
  imageURL: z.string().optional(),
});


export type Template1Props = z.infer<typeof Template1PropsZod>;
export type Contact = z.infer<typeof ContactTypeZod>;