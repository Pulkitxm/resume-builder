import axios from "axios";
import { baseUrl } from "../config";

export default async function signIn(email: string, password: string) {
  const res = await axios.post(
    baseUrl + "/api/_v1/login",
    {
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );
  return res.data;
}
