import { z } from "zod";

const ValidFields = z.object({
  templateNo: z.number(),
  name: z.string().optional(),
  proffesionTitle: z.string().optional(),
  aboutMe: z.string().optional(),
  workExperience: z.array(
    z.object({
      startDate: z.string(),
      endDate: z.string(),
      position: z.string(),
      company: z.string(),
      description: z.string(),
    })
  ).optional(),
  skills: z.array(z.string()).optional(),
  contacts: z.object({
    phone: z.string(),
    email: z.string(),
    address: z.string(),
    website: z.string(),
  }).optional(),
  education: z.object({
    name: z.string(),
    university: z.string(),
  }).optional(),
  imageURL: z.string().optional(),
});

export default ValidFields;
