import React, { Suspense, useState } from "react";

const CountryDropdown = React.lazy(() => import("./CountryDropdown"));

const SelectCountry = () => {
  const [showCountry, setShowCountry] = useState(false);
  return (
    <div>
      <form>
        <input type="text" placeholder="Name" /> <br />
        <input type="text" placeholder="Email" /> <br />
        <select onClick={() => setShowCountry(true)}>
          <option value="">Select a Country</option>
          {showCountry && (
            <Suspense fallback={<h1>Loading...........</h1>}>
              <CountryDropdown />
            </Suspense>
          )}
        </select>
      </form>
    </div>
  );
};

export default SelectCountry;
