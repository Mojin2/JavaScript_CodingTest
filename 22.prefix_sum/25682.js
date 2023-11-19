const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/25682.txt"; // 제출시 삭제

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
  let [str, ...board] = list;
  let [N, M, K] = str.split(" ").map((el) => Number(el));
  board = board.map((el) => el.split(""));
  let W = Array.from(new Array(N), () => new Array(M).fill(0));
  let B = Array.from(new Array(N), () => new Array(M).fill(0));
  for (let i = 0; i < W.length; i++) {
    for (let j = 0; j < W[i].length; j++) {
      if (i + j === 0 || (i + j) % 2 === 0) {
        W[i][j] = "W";
        B[i][j] = "B";
      } else {
        W[i][j] = "B";
        B[i][j] = "W";
      }
      W[i][j] = W[i][j] === board[i][j] ? 0 : 1;
      B[i][j] = B[i][j] === board[i][j] ? 0 : 1;
    }
  }
  let W_dp = Array.from(new Array(N + 1), () => new Array(M + 1).fill(0));
  let B_dp = Array.from(new Array(N + 1), () => new Array(M + 1).fill(0));
  for (let i = 1; i < W_dp.length; i++) {
    for (let j = 1; j < W_dp[i].length; j++) {
      W_dp[i][j] =
        W_dp[i - 1][j] + W_dp[i][j - 1] + W[i - 1][j - 1] - W_dp[i - 1][j - 1];
      B_dp[i][j] =
        B_dp[i - 1][j] + B_dp[i][j - 1] + B[i - 1][j - 1] - B_dp[i - 1][j - 1];
    }
  }
  let answer = [];
  for (let i = W_dp.length - 1; i >= K; i--) {
    for (let j = W_dp[i].length - 1; j >= K; j--) {
      let W_ans =
        W_dp[i][j] - W_dp[i - K][j] - W_dp[i][j - K] + W_dp[i - K][j - K];
      let B_ans =
        B_dp[i][j] - B_dp[i - K][j] - B_dp[i][j - K] + B_dp[i - K][j - K];
      answer.push(W_ans);
      answer.push(B_ans);
    }
  }
  console.log(Math.min(...answer));
}

// let [x1, y1, x2, y2] = el;
// let answer = dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1];
