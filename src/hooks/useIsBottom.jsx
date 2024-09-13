/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

function useIsBottom() {
  const [isBottom, setIsBottom] = useState(false);
  const ref = useRef(null);
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
      observer.disconnect();
    };
  }, [ref.current]);

  return { isBottom, ref };
}

export default useIsBottom;
