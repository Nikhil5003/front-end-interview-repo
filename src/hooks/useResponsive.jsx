import { useEffect, useState } from "react";
import useDebounceWithFunction from "./useDebounce";

function useResponsive() {
  const [state, setState] = useState({
    isMobile: false,
    isDesktop: false,
    isTablet: false,
  });
  const resizeHandler = () => {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 990;
    const isDesktop = window.innerWidth > 990;
    setState({
      isDesktop,
      isMobile,
      isTablet,
    });
  };
  const debouncedFunction = useDebounceWithFunction(resizeHandler, 500);
  useEffect(() => {
    window.addEventListener("resize", debouncedFunction);

    return () => {
      window.removeEventListener("resize", debouncedFunction);
    };
  });
  return state;
}

export default useResponsive;
