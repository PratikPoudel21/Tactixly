"use client";

import { Board, ThemeToggle } from "@/components";
import { useGame } from "@/hooks";

const Home = () => {
  const [board, gameStatus, handleClick, restartGame] = useGame();

  return (
    <div className="h-screen flex flex-col space-y-4 justify-center items-center">
      <p>{gameStatus}</p>
      <Board board={board} handleClick={handleClick} />
      <button onClick={restartGame}>Restart</button>
      <ThemeToggle />
    </div>
  );
};

export default Home;
