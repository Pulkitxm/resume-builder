import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { CookiesProvider } from "react-cookie";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RecoilRoot>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CookiesProvider>
    </RecoilRoot>
  </BrowserRouter>
);
