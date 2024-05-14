let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

function solution(board) {
  let n = board.length;
  let answer = Number.MAX_SAFE_INTEGER;
  let dp = Array.from(Array(n), () => Array(n).fill(0));
  let queue = [
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ];

  while (queue.length > 0) {
    let [cx, cy, dir, price] = queue.shift();
    if (cx === n - 1 && cy === n - 1) {
      answer = Math.min(answer, price);
    }
    for (let i = 0; i < 4; i++) {
      let nx = cx + dx[i];
      let ny = cy + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= n || board[nx][ny]) continue;

      let charge = dir === i ? price + 100 : price + 600;
      if (!dp[nx][ny] || dp[nx][ny] >= charge) {
        dp[nx][ny] = charge;
        queue.push([nx, ny, i, charge]);
      }
    }
  }
  return dp;
}
let board = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0],
];

console.log(solution(board));
