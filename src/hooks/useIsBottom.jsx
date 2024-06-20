/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function useIsBottom(ref) {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsBottom(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.9, // Adjust threshold as needed
      }
    );

    if (ref?.current) {
      observer.observe(ref?.current);
    }

    return () => {
      if (ref?.current) {
        observer.unobserve(ref?.current);
      }
    };
  }, [ref?.current]);

  return { isBottom };
}

export default useIsBottom;
