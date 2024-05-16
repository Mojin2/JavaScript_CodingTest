function solution(board) {
  let answer = 0;
  let dp = Array.from(Array(board.length), () =>
    Array(board[0].length).fill(0)
  );
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = board[i][j];
        answer = Math.max(dp[i][j], answer);
      }
    }
  }
  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        answer = Math.max(dp[i][j], answer);
      }
    }
  }
  return Math.pow(answer, 2);
}

let board = [
  [0, 1],
  [1, 0],
];

console.log(solution(board));
