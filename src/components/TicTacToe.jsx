import React, { useEffect } from "react";
import useTicTacToe from "../hooks/useTicTacToe";

function TicTacToe() {
  const { winner, handleClick, squares, reset } = useTicTacToe();
  useEffect(() => {
    if (winner) {
      alert(`winner is ${winner}`);
      reset();
    }
  }, [reset, winner]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "32px",
        flexWrap: "wrap",
        width: "450px",
      }}
    >
      {squares.map((ele, index) => (
        <button
          style={{
            border: "2px solid yellow",
            width: 100,
            height: 100,
            boxSizing: "border-box",
            padding: 10,
            borderRadius: "50%",
          }}
          onClick={() => handleClick(index)}
        >
          {ele}
        </button>
      ))}
    </div>
  );
}

export default TicTacToe;
