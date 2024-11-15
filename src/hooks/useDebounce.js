import React, { useEffect, useRef, useState } from "react";

function useDebounce(initialValue) {
  const [debouncedValue, setDebouncedValue] = useState(initialValue);
  const timerID = useRef(null);
  useEffect(() => {
    timerID.current = setTimeout(() => {
      setDebouncedValue(initialValue);
    }, 500);

    return () => {
      if (timerID.current) {
        clearTimeout(timerID.current);
      }
    };
  }, [initialValue]);

  return debouncedValue;
}

export default useDebounce;
