let dir = __dirname + "/9521.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let x = input[0];
let y = input[1];

let dp = Array.from(Array(x.length + 1), () => Array(y.length + 1).fill(0));

for (let i = 1; i < dp.length; i++) {
  for (let j = 1; j < dp[i].length; j++) {
    if (x[i - 1] === y[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
    else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
  }
}

console.log(dp[x.length][y.length]);
