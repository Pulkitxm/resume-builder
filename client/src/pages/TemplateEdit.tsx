import { useNavigate, useParams } from "react-router-dom";
import templates from "../data/templates";
import Template1 from "../components/resume/Template1";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useSetRecoilState } from "recoil";
import { alertAtom } from "../state/alert";

export default function TemplateEdit() {
  const [isEditable, setIsEditable] = useState(true);
  const id: number = Number(useParams().id || "");
  const template = templates[id - 1];
  const [{ token }] = useCookies(["token"]);
  const navigate = useNavigate();
  const setAlert = useSetRecoilState(alertAtom);
  useEffect(() => {
    if (!token) {
      navigate("/login");
      setAlert({
        show: true,
        message: "You need to login to edit the template",
        type: "warning",
      });
    }
  }, [navigate, setAlert, token]);
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full bg-gray-600 overflow-auto h-full py-20">
        <Template1
          template1Props={template}
          isEditable={isEditable}
          setIsEditable={setIsEditable}
        />
      </div>
    </div>
  );
}
