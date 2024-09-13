import { useEffect, useState } from "react";
import useDebounceWithFunction from "./useDebounce";

function useScrollPercentage(ref) {
  const [percentage, setPercentage] = useState(0);
  const onScroll = () => {
    const scrollTop = ref.current.scrollTop;
    const remainingHeightToScroll =
      ref.current.scrollHeight - ref.current.clientHeight;
    const scrolledPercentage = (scrollTop / remainingHeightToScroll) * 100;
    setPercentage(scrolledPercentage);
  };
  const debouncedFunction = useDebounceWithFunction(onScroll, 100);
  useEffect(() => {
    ref.current.addEventListener("scroll", onScroll);

    return () => {
      if (ref?.current) {
        ref?.current?.removeEventListener("scroll", onScroll);
      }
    };
  }, [ref, debouncedFunction]);

  return percentage;
}

export default useScrollPercentage;
