import { use } from "react";
import { AuthContext, LangContext } from "../context";

const ChildrenComponent = () => {
  const data = use(AuthContext);
  const lang = use(LangContext);
  if (!lang) {
    return null;
  }

  const { language, changeLang } = lang;

  return (
    <div>
      <button onClick={data?.login}>Button</button>
      <button onClick={() => changeLang("bangla")}>Make Bangla</button>
      <button onClick={() => changeLang("english")}>Make English</button> <br />
      {language === "english" ? "English" : "Bangla"} <br />
      children-component
    </div>
  );
};

export default ChildrenComponent;
