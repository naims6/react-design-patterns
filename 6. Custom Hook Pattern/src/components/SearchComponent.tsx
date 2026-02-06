import  { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

function SearchComponent() {
  const [query, setQuery] = useState("");

  // You will implement this hook
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      console.log("Searching for:", debouncedQuery);

      // Imagine this is an API call
      // fetch(`/api/search?q=${debouncedQuery}`)
    }
  }, [debouncedQuery]);

  return (
    <div>
      <h3>Search Example</h3>

      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <p>Real value: {query}</p>
      <p>Debounced value: {debouncedQuery}</p>
    </div>
  );
}

export default SearchComponent;
