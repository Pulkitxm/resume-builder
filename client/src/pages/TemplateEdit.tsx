import { useNavigate, useParams } from "react-router-dom";
import templates from "../data/templates";
import Template1 from "../components/resume/Template1";
import SpeedDial from "../components/SpeedDial";
import { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";

export default function TemplateEdit() {
  const [isEditable, setIsEditable] = useState(true);
  const divRef = useRef(null);
  const id: number = Number(useParams().id || "");
  const template = templates[id - 1];
  const [{ token }] = useCookies(["token"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) navigate("/login");
  }, [navigate, token]);
  const handleDownload = () => {
    const input = divRef.current;
    setIsEditable(false);
    setTimeout(() => {
      if (input != null) {
        // @ts-expect-error___
        html2pdf().from(input).save();
      }
      setIsEditable(true);
    }, 10);
  };
  const handleSave = () => {};
  return (
    <div className="w-full h-full flex flex-col">
      <SpeedDial handleSave={handleSave} handleDownload={handleDownload} />
      <div className="w-full bg-gray-600 overflow-auto h-full py-20">
        <Template1
          template1Props={template}
          isEditable={isEditable}
          divRef={divRef}
        />
      </div>
    </div>
  );
}
