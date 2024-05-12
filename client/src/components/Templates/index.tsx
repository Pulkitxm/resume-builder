import { Link } from "react-router-dom";
import templates from "../../data/templatesImages";
import { Button } from "@material-tailwind/react";

export default function Templates() {
  return (
    <div className="text-3xl">
      {templates.map((template, index) => {
        return (
          <Link to={`/template/${index + 1}`} key={index}>
            {/* @ts-expect-error___ */}
            <Button color="white">
              <img
                src={template}
                className="w-[420px] h-[500px] object-fill hover:brightness-75 transition duration-100 ease-in-out rounded-xl"
                draggable="false"
              />
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
