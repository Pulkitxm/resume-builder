import { atom } from "recoil";
import { Template1Props } from "../types/Templates/Template1";

export const myresumes = atom<Template1Props[]>({
    key: "myresumes",
    default:[]
});