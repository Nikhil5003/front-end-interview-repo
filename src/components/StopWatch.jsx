import React from "react";
import useStopWatch from "../hooks/useStopWatch";
import Button from "@mui/material/Button";

export default function StopWatch() {
  const {
    milliSeconds,
    minutes,
    seconds,
    startTimer,
    resetTimer,
    isTimerRunning,
  } = useStopWatch();
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
        <div style={{ flex: 1 }}>milliSeconds</div>
        <div style={{ flex: 1 }}>seconds</div>
        <div style={{ flex: 1 }}>minutes</div>
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div style={{ flex: 1 }}>{milliSeconds.toString().padStart(0, 2)}</div>
        <div style={{ flex: 1 }}>{seconds.toString().padStart(0, 2)}</div>
        <div style={{ flex: 1 }}>{minutes.toString().padStart(0, 2)}</div>
      </div>
      <div style={{ display: "flex", gap: "16px" }}>
        <Button
          variant="contained"
          color="success"
          fullWidth
          style={{ flex: 1 }}
          onClick={startTimer}
        >
          {isTimerRunning ? "Stop Timer" : "Start Timer"}
        </Button>
        <Button
          variant="contained"
          color="error"
          style={{ flex: 1 }}
          onClick={resetTimer}
        >
          Reset timer
        </Button>
      </div>
    </div>
  );
}
