import { useState } from "react";

function useCopy() {
  const [copiedText, setCopiedText] = useState();
  const onCopy = async (text) => {
    if (!navigator?.clipboard) {
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
    } catch (err) {
      console.log(err.message);
      setCopiedText(null);
    }
  };
  return { copiedText, onCopy };
}

export default useCopy;
