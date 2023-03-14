//안전지대
function solution(board) {
  let tmp = [];
  let warn = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        tmp.push(i);
        tmp.push(j);
        warn.push(tmp);
        tmp = [];
      }
    }
  }
  for (let i = 0; i < warn.length; i++) {
    if (warn[i][0] < 5 && warn[i][1] + 1 < 5) {
      board[warn[i][0]][warn[i][1] + 1] = 1;
    }
    if (warn[i][0] < 5 && warn[i][1] - 1 < 5) {
      board[warn[i][0]][warn[i][1] - 1] = 1;
    }
    if (warn[i][0] + 1 < 5 && warn[i][1] < 5) {
      board[warn[i][0] + 1][warn[i][1]] = 1;
    }
    if (warn[i][0] - 1 < 5 && warn[i][1] < 5) {
      board[warn[i][0] - 1][warn[i][1]] = 1;
    }
    if (warn[i][0] - 1 < 5 && warn[i][1] + 1 < 5) {
      board[warn[i][0] - 1][warn[i][1] + 1] = 1;
    }
    if (warn[i][0] - 1 < 5 && warn[i][1] - 1 < 5) {
      board[warn[i][0] - 1][warn[i][1] - 1] = 1;
    }
    if (warn[i][0] + 1 < 5 && warn[i][1] + 1 < 5) {
      board[warn[i][0] + 1][warn[i][1] + 1] = 1;
    }
    if (warn[i][0] + 1 < 5 && warn[i][1] - 1 < 5) {
      board[warn[i][0] + 1][warn[i][1] - 1] = 1;
    }
  }
  return board.reduce((a, c) => a.concat(c)).filter((v) => v === 0).length;
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];
console.log(solution(board));
