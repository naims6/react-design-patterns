import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AuthProvider from "./Provider/AuthProvider.tsx";
import LangProvider from "./Provider/LangProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </AuthProvider>
  </StrictMode>,
);
