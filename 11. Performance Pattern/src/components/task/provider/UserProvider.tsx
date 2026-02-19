import type React from "react";
import { UserContext } from "../context/userContext";

const UserProvider = ({ children }: {children: React.ReactNode}) => {
  const user = {
    name: "naim",
  };
  return <UserContext value={user}>{children}</UserContext>;
};

export default UserProvider;
