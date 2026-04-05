// Board component
"use client";

import { Box } from "./Box";

interface Props {
  board: string[];
  handleClick: (index: number) => void;
}

const Board = ({ board, handleClick }: Props) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 w-125 h-125 place-items-center">
      {board.map((cell, index) => {
        return (
          <Box key={index} index={index} handleClick={handleClick}>
            {cell}
          </Box>
        );
      })}
    </div>
  );
};

export { Board };
