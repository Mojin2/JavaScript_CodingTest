const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1780.txt"; // 제출시 삭제

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
  let board = list.slice(1);
  let one_count = 0;
  let zero_count = 0;
  let minus_one_count = 0;
  function divide(n, start, end) {
    if (check(n, start, end)) {
      if (board[start][end] === 1) one_count++;
      if (board[start][end] === 0) zero_count++;
      if (board[start][end] === -1) minus_one_count++;
      return;
    }
    let div = n / 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        divide(div, start + div * i, end + div * j);
      }
    }
  }
  function check(n, start, end) {
    let standard = board[start][end];
    for (let i = start; i < start + n; i++) {
      for (let j = end; j < end + n; j++) {
        if (board[i][j] !== standard) return false;
      }
    }
    return true;
  }
  divide(n, 0, 0);
  console.log(minus_one_count);
  console.log(zero_count);
  console.log(one_count);
}
