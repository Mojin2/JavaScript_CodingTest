const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/12865.txt"; // 제출시 삭제

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
  const n = Number(list[0][0]); // 4
  const k = Number(list[0][1]); // 7
  let arr = list.slice(1);
  let dp = Array.from(new Array(n + 1), () => new Array(k + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const [W, V] = arr[i - 1];
    for (let j = 1; j <= k; j++) {
      if (j - W >= 0) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - W] + V);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  console.log(dp[n][k]);
}
