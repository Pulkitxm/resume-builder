import { Link } from "react-router-dom";
import templates from "../../data/templatesImages";

export default function Templates() {
  return (
    <div className="text-3xl">
      {templates.map((template, index) => {
        return (
          <Link to={`/template/${index+1}`} key={index}>
            <img src={template} className="w-[420px] h-[500px] object-fill hover:brightness-75 transition duration-100 ease-in-out rounded-xl" draggable="false" />
          </Link>
        );
      })}
    </div>
  );
}