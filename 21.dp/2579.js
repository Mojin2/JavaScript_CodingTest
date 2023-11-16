const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2579.txt"; // 제출시 삭제

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
  let arr = list.slice(1);
  let dp = Array(arr.length).fill(0);

  dp[0] = arr[0];
  dp[1] = arr[0] + arr[1];
  dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);
  for (let i = 3; i < arr.length; i++) {
    dp[i] = Math.max(arr[i] + arr[i - 1] + dp[i - 3], arr[i] + dp[i - 2]);
  }
  console.log(dp[n - 1]);
}
