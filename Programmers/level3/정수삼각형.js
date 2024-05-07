function solution(triangle) {
  let dp = [];
  for (let i = 0; i < triangle.length; i++) {
    let tmp = [];
    for (let j = 0; j < triangle[i].length; j++) {
      tmp.push(0);
    }
    dp.push(tmp);
  }
  let max = Number.MIN_SAFE_INTEGER;
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
        max = Math.max(dp[i][j], max);
      } else if (j === dp[i].length - 1) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
        max = Math.max(dp[i][j], max);
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j] + triangle[i][j],
          dp[i - 1][j - 1] + triangle[i][j]
        );
        max = Math.max(dp[i][j], max);
      }
    }
  }
  return max;
}

let triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
console.log(solution(triangle));
