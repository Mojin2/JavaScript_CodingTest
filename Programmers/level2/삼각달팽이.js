function solution(n) {
  let board = Array.from(Array(n), (_, index) => Array(index + 1).fill(0));
  let sum = 0;
  board.forEach((el) => (sum += el.length));
  let number = 1;
  let cx = 0;
  let cy = 0;
  let dir = 0;
  let direction = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ];

  while (true) {
    board[cx][cy] = number;
    if (number === sum) break;
    if (
      cx + direction[dir][0] >= n ||
      cy + direction[dir][1] >= n ||
      (cx + direction[dir][0] < n &&
        cy + direction[dir][1] < n &&
        board[cx + direction[dir][0]][cy + direction[dir][1]] !== 0)
    ) {
      dir = (dir + 1) % 3;
    }
    cx = cx + direction[dir][0];
    cy = cy + direction[dir][1];
    number++;
  }
  return board.reduce((acc, cur) => acc.concat(cur));
}

let n = 4;
console.log(solution(n));
