function solution(sticker) {
  let dp = Array(sticker.length).fill(0);
  if (sticker.length === 1) return sticker[0];
  //첫번째 원소를 포함하는 dp > 마지막 원소 포함 불가능
  dp[0] = sticker[0];
  dp[1] = sticker[0];

  let dp2 = Array(sticker.length).fill(0);

  dp2[0] = 0;
  dp2[1] = sticker[1];

  for (let i = 2; i < dp.length - 1; i++) {
    dp[i] = Math.max(dp[i - 2] + sticker[i], dp[i - 1]);
  }
  for (let i = 2; i < dp2.length; i++) {
    dp2[i] = Math.max(dp2[i - 2] + sticker[i], dp2[i - 1]);
  }

  return Math.max(dp[dp.length - 2], dp2[dp2.length - 1]);
}

let sticker = [14, 6, 5, 11, 3, 9, 2, 10];
console.log(solution(sticker));
// sticker[i]를 포함하는 경우
// dp[i][1] = dp[i-1][0] + sticker[i]

// sticker[i]를 포함하지 않는 경우
// dp[i][0] = Math.max(dp[i-1][1],dp[i-1][0]);
