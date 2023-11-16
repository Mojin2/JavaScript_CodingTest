const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/10844.txt"; // 제출시 삭제

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
  dp[1] = 9;
  dp[2] = 17;
  dp[3] = 32;
  //dp[4] = 61;
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] * 2 - (i - 1);
  }
  console.log(dp[n] % 1000000000);
}
122 - 6;
// 1 2 3 4 5 6 7 8 9 >> 9 (0,9)1개 9*2-1
// 0 2 1 3 2 4 3 5 4 6 5 7 6 8 7 9 8  >> 17 (0,9)2개 17*2-2
// 0 9 9 >> 32 3개 32*2-3
// 61
