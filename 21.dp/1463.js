const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1463.txt"; // 제출시 삭제

const readline = require("readline");
const rl = readline.createInterface({
  // input: process.stdin, // 제출시 활성화
  input: fs.createReadStream(path), // 제출시 삭제
  output: process.stdout,
});

let input;
let list = [];
rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  list = input.split(" ").map((el) => Number(el));
  solution(list);
  process.exit();
});
function solution(list) {
  const n = list[0];
  let dp = Array(n).fill(0);
  dp[0] = 0; // n = 1
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 2;
  dp[4] = 3;
  dp[5] = 2;
  dp[6] = 3;
  dp[7] = 3;
  dp[8] = 2; // n = 9
  for (let i = 9; i < n; i++) {
    // n = 11
    let number = i + 1;
    let first = number - 1;
    let second = number % 3 === 0 ? number / 3 : undefined;
    let third = number % 2 === 0 ? number / 2 : undefined;
    if (second === undefined && third !== undefined) {
      dp[i] = Math.min(dp[first - 1], dp[third - 1]) + 1;
    } else if (third === undefined && second !== undefined) {
      dp[i] = Math.min(dp[first - 1], dp[second - 1]) + 1;
    } else if (second === undefined && third === undefined) {
      dp[i] = dp[first - 1] + 1;
    } else {
      dp[i] = Math.min(dp[first - 1], dp[second - 1], dp[third - 1]) + 1;
    }
  }
  console.log(dp[n - 1]);
}
