import { atom } from "recoil";

type Alert = {
  show: boolean;
  message: string;
  type: "success" | "error" | "warning";
};

export const alertAtom = atom<Alert>({
  key: "alert",
  default: {
    show: false,
    message: "",
    type: "success",
  },
});