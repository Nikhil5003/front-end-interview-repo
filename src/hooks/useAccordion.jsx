import { useState } from "react";

function useAccordion() {
  const [expand, setExpand] = useState(false);
  const onToggle = () => {
    setExpand((prev) => !prev);
  };
  return [expand, onToggle];
}

export default useAccordion;
