import axios from "axios";
import { baseUrl } from "../config";
import {
  Template1Props,
  Template1PropsZod,
} from "../types/Templates/Template1";

export async function saveResumeData(data: Omit<Template1Props, "imageURL">) {
  return await axios.post(
    baseUrl + "/api/_v1/resume",
    {
      ...data,
      templateNo: 1,
    },
    {
      withCredentials: true,
    }
  );
}

export async function getResumesData() {
  const res = await axios.get(baseUrl + "/api/_v1/resume", {
    withCredentials: true,
  });
  const resp: Template1Props[] = [];
  res.data.forEach((obj: { data: object }) => {
    const parsedData = Template1PropsZod.safeParse(obj.data);
    console.log(parsedData);
    if (parsedData.success) {
      resp.push(parsedData.data);
    }
  });
  return resp;
}