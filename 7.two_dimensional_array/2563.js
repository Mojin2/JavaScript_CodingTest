const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2563.txt"; // 제출시 삭제

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
  let n = list[0][0];
  list.shift();
  let c = 0;
  let v = 0;
  // list = [[3,7],[15,7],[5,2]]
  let board = Array.from(Array(100), () => Array(100).fill(0));
  for (let i = 0; i < n; i++) {
    for (let a = 0; a < 10; a++) {
      for (let b = 0; b < 10; b++) {
        if (board[list[i][0] + a][list[i][1] + b] === 1) {
          v += 1;
        } else {
          board[list[i][0] + a][list[i][1] + b] = 1;
          c += 1;
        }
      }
    }
  }

  console.log(c);
}
