import SignUpForm from "../components/Auth/SignUpForm";
import SignInForm from "../components/Auth/SignInForm";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

const Auth = ({ page }: { page: "login" | "signup" }) => {
  const [cookies] = useCookies(["token"]);
  if(cookies?.token) return <Navigate to="/" />;
  return (
    <div className="h-full w-full flex justify-center items-center">
      {page == "signup" ? <SignUpForm /> : <SignInForm />}
    </div>
  );
};

export default Auth;