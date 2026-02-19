import { useEffect, useRef, useState } from "react";

export const useThrottle = (value: number, delay: number) => {
  const [throttleValue, setThrottleValue] = useState(value);
  const lastExecuted = useRef<number>(0);

  useEffect(() => {
    const now = Date.now();
    setTimeout(() => {
      if (now - lastExecuted.current >= delay) {
        console.log("Do DOM Manipulation");
        setThrottleValue(value);
        lastExecuted.current = now;
      }
    }, 0);
  }, [delay, value]);

  return throttleValue;
};
