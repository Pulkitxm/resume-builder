import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-screen flex items-center px-10 py-2 justify-between shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      <Link to={"/"} className="text-3xl font-bold select-none cursor-pointer">
        Resume Builder
      </Link>
      <div>
        <Link to={"/register"}>
          {/* @ts-expect-error___ */}
          <Button color="white" size="lg" className="hidden lg:inline-block">
            <span>Register</span>
          </Button>
        </Link>
        <Link to={"/login"}>
          {/* @ts-expect-error___ */}
          <Button color="white" size="lg" className="hidden lg:inline-block">
            <span>Sign in</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
