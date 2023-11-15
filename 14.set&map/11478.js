const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/11478.txt"; // 제출시 삭제

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
  S = input;
  solution(S);
  process.exit();
});
function solution(S) {
  let answer = new Set();
  for (let i = 0; i < S.length; i++) {
    for (let j = 0; j < S.length - i; j++) {
      answer.add(S.slice(j, j + i + 1));
    }
  }
  console.log(answer.size);
}
