import { useCallback, useState } from "react";

function useCarousel(length) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % length); // to ensure cylic dependency on next button
  }, [length]);

  const onPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + length) % length); // to ensure cyclic dependency
  }, [length]);

  const onDotClick = useCallback((index) => {
    setActiveIndex(index); //for dot defined in bottom here
  }, []);

  return {
    activeIndex,
    onNext,
    onPrev,
    onDotClick,
  };
}

export default useCarousel;
