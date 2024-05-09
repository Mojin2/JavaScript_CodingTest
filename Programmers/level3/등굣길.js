function solution(m, n, puddles) {
  let dp = Array.from(Array(n + 1), () => Array(m + 1).fill(undefined));
  puddles.forEach((el) => {
    let [x, y] = el;
    dp[y][x] = 0;
  });
  dp[1][1] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (dp[i][j] === undefined) {
        let tmp;
        if (i === 1) {
          tmp = dp[i][j - 1];
        } else if (j === 1) {
          tmp = dp[i - 1][j];
        } else {
          tmp = dp[i - 1][j] + dp[i][j - 1];
        }
        dp[i][j] = tmp % 1000000007;
      }
    }
  }
  return dp[n][m] % 1000000007;
}

let m = 4;
let n = 3;
let puddles = [
  [1, 2],
  [3, 1],
];
console.log(solution(m, n, puddles));
