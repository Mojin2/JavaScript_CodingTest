const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/5597.txt"; // 제출시 삭제

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
  let answer = [];
  let array = Array(30)
    .fill(0)
    .map((_, index) => index + 1);
  list = list.reduce((acc, cur) => acc.concat(cur)).sort((a, b) => a - b);
  array.forEach((el) => {
    if (list.indexOf(el) === -1) {
      answer.push(el);
    }
  });

  console.log(answer[0]);
  console.log(answer[1]);
}
