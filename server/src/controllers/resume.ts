import { Request, Response } from "express";
import ValidFields from "../types/ValidFields";
import Resume from "../models/Resume";

export async function handlePostResume(req: Request, res: Response) {
  const body = req.body;
  const result = ValidFields.safeParse(body);
  
  const userID= req.body.userId;

  if(!userID){
    return res.status(401).json({
        message:"You are not authorized to access this route"
    });
  }

  if (!result.success) {
    return res.status(400).send(result.error);
  }
  await Resume.deleteMany({});
  const newResume = new Resume({
    templateNo: 1,
    data: result.data,
    userId: userID
  });
  await newResume.save();
  res.send(newResume);
}