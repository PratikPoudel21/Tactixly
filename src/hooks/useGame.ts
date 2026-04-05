// custom "useGame" hook to handle the game logic.
"use client";

import { useState, useEffect, useRef } from "react";
import { isGameOver, checkWin } from "@/lib/gameUtils";

type Turn = "X" | "O" | null;

export function useGame() {
  const [board, setBoard] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [turn, setTurn] = useState<Turn>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameStatus, setGameStatus] = useState<string>(
    `Turn: ${turn ?? "..."}`,
  );
  const initialLoad = useRef<boolean>(true);

  useEffect(() => {
    setTurn(Math.random() > 0.5 ? "X" : "O");
    initialLoad.current = false;
  }, []);

  useEffect(() => {
    if (initialLoad.current) return;

    const winner = checkWin(board);

    if (winner) {
      setGameStatus(`${winner} wins`);
    }

    if (isGameOver(board) && !winner) {
      setGameStatus("Draw. Nobody won");
    }

    if (isGameOver(board) || winner) {
      setGameOver(true);
      return;
    }

    let nextTurn: Turn = turn == "X" ? "O" : "X";
    setTurn(nextTurn);
    setGameStatus(`Turn: ${nextTurn}`);
  }, [board]);

  const handleClick = (index: number) => {
    if (!turn) return;
    if (board[index] !== "") return;
    if (gameOver) return;

    setBoard((prev) => prev.map((item, i) => (i === index ? turn : item)));
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setGameOver(false);
    setTurn(Math.random() > 0.5 ? "X" : "O");
  };

  return [board, gameStatus, handleClick, restartGame] as const;
}
