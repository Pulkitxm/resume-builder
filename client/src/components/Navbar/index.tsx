import { Button } from "@material-tailwind/react";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [{ token }] = useCookies(["token"]);
  const [name, setName] = useState("");
  useEffect(() => {
    if (token) {
      const data: {
        email: string;
      } = jwtDecode(token);
      if (data.email) {
        const nameFromEmail = data.email.split("@")[0];
        setName(nameFromEmail);
      }
    }
  }, [token]);

  return (
    <div className="w-screen flex items-center px-10 py-2 justify-between shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      <Link to={"/"} className="text-3xl font-bold select-none cursor-pointer">
        Resume Builder
      </Link>
      <div>
        {name ? (
          <p className="select-none cursor-text">
            Welcome, <span className="font-bold">{name}</span>
          </p>
        ) : (
          <>
            <Link to={"/register"}>
              {/* @ts-expect-error___ */}
              <Button
                color="white"
                size="lg"
                className="hidden lg:inline-block"
              >
                <span>Register</span>
              </Button>
            </Link>
            <Link to={"/login"}>
              {/* @ts-expect-error___ */}
              <Button
                color="white"
                size="lg"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
