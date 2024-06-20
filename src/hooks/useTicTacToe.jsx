import { useCallback, useState } from "react";

function useTicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setisNext] = useState(false);

  const handleClick = (i) => {
    const newSqaures = squares.slice();
    newSqaures[i] = isNext ? "*" : "0";
    setSquares(newSqaures);
    setisNext((prev) => !prev);
  };
  function calculateWinner(sq) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
        return sq[a];
      }
    }
    return null;
  }
  const winner = calculateWinner(squares);
  const reset = useCallback(() => {
    setSquares(new Array(9).fill(null));
  }, []);

  return {
    winner,
    handleClick,
    squares,
    reset,
  };
}

export default useTicTacToe;
