let dir = __dirname + "/11053.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = Number(input.shift());
const arr = input[0].split(" ").map(Number);

const dp = Array(N).fill(0);

dp[0] = 1;

for (let i = 1; i < N; i++) {
  let value = arr[i];
  let rest = arr.slice(0, i);
  let tmp = 1;
  for (let j = 0; j < rest.length; j++) {
    if (value > rest[j]) {
      dp[i] = Math.max(dp[j] + 1, tmp);
      tmp = dp[i];
    }
  }
  if (dp[i] === 0) {
    dp[i] = 1;
  }
}
console.log(Math.max(...dp));

// 50,60,10,20,30,40
// [1,2,1,2,3,4]
