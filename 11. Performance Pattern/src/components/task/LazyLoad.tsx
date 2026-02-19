import React, { Suspense, useContext, useState } from "react";
import { UserContext } from "./context/userContext";

const CountryDropdown = React.lazy(() => import("./CountryDropdown"));

const SelectCountry = () => {
  const [showCountry, setShowCountry] = useState(false);
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <form>
        <input type="text" placeholder="Name" /> <br />
        <input type="text" placeholder="Email" /> <br />
        <select onClick={() => setShowCountry(true)}>
          <option value="">Select a Country</option>
          {showCountry && (
            <Suspense fallback={"Loading..."}>
              <CountryDropdown />
            </Suspense>
          )}
        </select>
      </form>
    </div>
  );
};

export default SelectCountry;
