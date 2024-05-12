import axios from "axios";
import { baseUrl } from "../config";

export async function saveResumeData(data){
    await axios.post(baseUrl+"/api/_v1/resume",data)
}