import axios from "axios";
import { baseUrl } from "../config";

export default async function signUp(
  email: string,
  password: string,
  rePassword: string
) {
  const res = await axios.post(baseUrl + "/api/_v1/register", {
    email,
    password,
    rePassword,
  });
  return res.data;
}
