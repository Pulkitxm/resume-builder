import { Link, useParams } from "react-router-dom";
import templates from "../data/templates";
import Template1 from "../components/resume/Template1";

export default function Template() {
  const id: number = Number(useParams().id || "");
  const template = templates[id - 1];

  return (
    <div className="w-full h-full">
      <Link to={`/template/${id}/edit`} className="py-4 px-5 rounded-lg bg-yellow-700 fixed bottom-2 right-6">
        Edit this template
      </Link>
      <div className="w-full bg-gray-600 overflow-auto h-full py-20">
        <Template1 template1Props={template}  />
      </div>
    </div>
  );
}