import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, debouceTime: number) {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, debouceTime);

    return () => clearTimeout(timer);
  }, [value, debouceTime]);

  return debounceValue;
}
