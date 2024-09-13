import { useEffect, useState } from "react";
import useDebounceWithFunction from "./useDebounce";

function useScrollPercentage() {
  const [percentage, setPercentage] = useState(0);
  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const remainingHeightToScroll =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolledPercentage = (scrollTop / remainingHeightToScroll) * 100;
    setPercentage(scrolledPercentage);
  };
  const debouncedFunction = useDebounceWithFunction(onScroll, 100);
  useEffect(() => {
    document.documentElement.addEventListener("scroll", debouncedFunction);

    return () => {
      document.documentElement.removeEventListener("scroll", debouncedFunction);
    };
  });

  return percentage;
}

export default useScrollPercentage;
