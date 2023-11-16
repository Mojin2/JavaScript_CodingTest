const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2156.txt"; // 제출시 삭제

const readline = require("readline");
const rl = readline.createInterface({
  // input: process.stdin, // 제출시 활성화
  input: fs.createReadStream(path), // 제출시 삭제
  output: process.stdout,
});

let input = [];
let list = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.forEach((val) => {
    list.push(val);
  });
  solution(list);
  process.exit();
});
function solution(list) {
  list = list.map((el) => Number(el));
  const n = list[0];
  let arr = list;
  let dp = Array(n + 1).fill(0);
  dp[1] = arr[1];
  dp[2] = arr[1] + arr[2];
  dp[3] = Math.max(arr[1] + arr[2], arr[2] + arr[3], arr[1] + arr[3]);
  for (let i = 4; i < arr.length; i++) {
    dp[i] = Math.max(
      dp[i - 2] + arr[i],
      dp[i - 3] + arr[i] + arr[i - 1],
      dp[i - 1]
    );
  }
  console.log(dp[n]);
}
