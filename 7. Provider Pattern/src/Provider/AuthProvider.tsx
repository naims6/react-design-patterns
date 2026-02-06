import React from "react";
import { AuthContext } from "../context";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const authInfo = {
    login: () => {
      console.log("logining...");
    },
    signUp: () => {
      console.log("Sign up....");
    },
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
