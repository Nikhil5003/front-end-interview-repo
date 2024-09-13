import React from "react";
import useCountdown from "../hooks/useCountdown";
import useHasFocus from "../hooks/useHasFocus";

export default function Countdown() {
  const startTime = Date.now();
  const endTime = startTime + 120 * 1000;
  const { hours, seconds, days, minutes } = useCountdown(endTime);
  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ flex: 1 }}>Days</div>
        <div style={{ flex: 1 }}>Hours</div>
        <div style={{ flex: 1 }}>Minutes</div>
        <div style={{ flex: 1 }}>Seconds</div>
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ flex: 1 }}>{days.toString().padStart(0, 2)}</div>
        <div style={{ flex: 1 }}>{hours.toString().padStart(0, 2)}</div>
        <div style={{ flex: 1 }}>{minutes.toString().padStart(2, 0)}</div>
        <div style={{ flex: 1 }}>{seconds.toString().padStart(2, 0)}</div>
      </div>
    </div>
  );
}
