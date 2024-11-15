import React, { useState, useRef } from "react";

function useToastComponent() {
  const [props, setProps] = useState(null);
  const timerId = useRef(null);

  const onTrigger = ({ type, color, icon, message }) => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    setProps({ type, color, icon, message });

    timerId.current = setTimeout(() => {
      if (props) {
        setProps(null);
      }
    }, 1000);
  };

  const onClose = () => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }
    setProps(null);
  };

  return {
    onClick: onTrigger,
    props,
    onClose,
  };
}

export default useToastComponent;
