import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Template from "./pages/Template";
import TemplateEdit from "./pages/TemplateEdit";
import Auth from "./pages/Auth";

export default function App() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/template/:id" element={<Template />} />
          <Route path="/template/:id/edit" element={<TemplateEdit />} />
          <Route path="/login" element={<Auth page="login" />} />
          <Route path="/register" element={<Auth page="signup" />} />
        </Routes>
      </div>
    </div>
  );
}
