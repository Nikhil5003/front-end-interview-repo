/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect, useState } from "react";

function useCountdown(deadline) {
  const [timeLeft, setTimeLeft] = useState(deadline - Date.now());
  useEffect(() => {
    let timerID = setInterval(() => {
      let now = Date.now();
      let timeRemaining = deadline - now;

      if (timeRemaining <= 0) {
        clearInterval(timerID);
        setTimeLeft(0);
      } else {
        setTimeLeft(timeRemaining);
      }
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  let seconds = Math.floor((timeLeft / 1000) % 60);
  let minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  return {
    hours,
    minutes,
    seconds,
    days,
    timeLeft
  };
}

export default useCountdown;
