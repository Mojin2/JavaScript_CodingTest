const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/11660.txt"; // 제출시 삭제

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
  const n = list[0][0];
  const m = list[0][1];
  let board = list.slice(1, 1 + n);
  let question = list.slice(1 + n);
  let dp = Array.from(new Array(n + 1), () => new Array(n + 1).fill(0));
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      dp[i][j] =
        board[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
    }
  }
  let result = "";
  question.forEach((el) => {
    let [x1, y1, x2, y2] = el;
    let answer =
      dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1];
    result += answer + "\n";
  });
  console.log(result);
}
