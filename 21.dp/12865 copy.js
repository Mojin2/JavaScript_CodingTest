let dir = __dirname + "/12865.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
let lists = input.map((el) => el.split(" ").map(Number));

// i번째 물건까지의 배낭용량 j일때의 가치
const dp = Array.from(Array(N + 1), () => Array(K + 1).fill(0));
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= K; j++) {
    if (lists[i - 1][0] <= j) {
      dp[i][j] = Math.max(
        dp[i - 1][j],
        dp[i - 1][j - lists[i - 1][0]] + lists[i - 1][1]
      );
    } else {
      dp[i][j] = dp[i - 1][j];
    }
  }
}

console.log(dp[N][K]);
