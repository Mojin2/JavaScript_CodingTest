const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/11053.txt"; // 제출시 삭제

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
    list.push(val.split(" ").map((el) => parseInt(el)));
  });
  solution(list);
  process.exit();
});
function solution(list) {
  const n = list[0];
  let arr = list[1];

  let dp = Array(Math.max(...arr)).fill(0);
  dp[arr[0]] = 1;
  for (let i = 1; i < arr.length; i++) {
    let tmp = dp.slice(0, arr[i]);
    dp[arr[i]] = Math.max(...tmp) + 1;
  }

  console.log(Math.max(...dp));
}
