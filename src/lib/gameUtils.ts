const isGameOver = (board: string[]) => {
  return board.every((el) => el !== "");
};

const checkWin = (board: string[]) => {
  const possibleWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  for (let [n1, n2, n3] of possibleWins) {
    if (board[n1] == board[n2] && board[n2] == board[n3] && board[n3] !== "") {
      return board[n1];
    }
  }
  return null;
};

export { isGameOver, checkWin };
