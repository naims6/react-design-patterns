import { createContext } from "react";

interface IAuth {
  login: () => void;
  signUp: () => void;
}

export interface ILang {
  changeLang: (value: string) => void;
  language: string;
}

const AuthContext = createContext<IAuth | null>(null);
const LangContext = createContext<ILang | null>(null);

export { AuthContext, LangContext };
