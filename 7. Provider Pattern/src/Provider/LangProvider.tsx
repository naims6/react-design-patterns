import type React from "react";
import { LangContext } from "../context";
import { useState } from "react";

const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState("english");

  const changeLang = (value: string) => {
    setLanguage(value);
  };

  const lang = {
    changeLang,
    language,
  };
  
  return <LangContext value={lang}>{children}</LangContext>;
};

export default LangProvider;
