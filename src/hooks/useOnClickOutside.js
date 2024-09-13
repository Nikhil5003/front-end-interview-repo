import { useEffect } from "react";

function useOnClickOutside(ref, cb) {
  useEffect(() => {
    const handleEvent = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      cb(event);
    };
    document.addEventListener("mousedown", handleEvent);
    document.addEventListener("touchstart", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
      document.removeEventListener("touchstart", handleEvent);
    };
  }, [cb, ref]);
}

export default useOnClickOutside;
