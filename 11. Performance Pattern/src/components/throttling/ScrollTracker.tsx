import { useEffect, useState } from "react";
import { useThrottle } from "./useThrottle";

const ScrollTracker = () => {
  const [scrollValue, setScrollValue] = useState<number>(0);
  const throttleValue = useThrottle(scrollValue, 2000);
  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [throttleValue]);

  return (
    <div>
      ScrollTracker
      {throttleValue.toFixed()}
    </div>
  );
};

export default ScrollTracker;
