//겹치는 선분의 길이
function solution(lines) {
  let board = Array(201).fill(0);
  let board_idx = Array(201).fill(0);
  let start_idx = 0;
  for (let i = 0; i < board_idx.length; i++) {
    board_idx[i] = start_idx;
    start_idx++;
  }
  for (let i = 0; i < lines.length; i++) {
    for (
      let j = board_idx[lines[i][0] + 101];
      j < board_idx[lines[i][1] + 101];
      j++
    ) {
      board[j] += 1;
    }
  }
  return board.filter((v) => v >= 2).length;
}

let lines = [
  [-1, 1],
  [1, 3],
  [3, 9],
];
console.log(solution(lines));
