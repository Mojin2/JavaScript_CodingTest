const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/3009.txt"; // 제출시 삭제

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
  let first = list.map((el) => el[0]);
  let second = list.map((el) => el[1]);
  let answer = [];
  first.forEach((el) => {
    if (first.filter((item) => item === el).length === 1) {
      answer.push(el);
    }
  });
  second.forEach((el) => {
    if (second.filter((item) => item === el).length === 1) {
      answer.push(el);
    }
  });
  console.log(answer.join(" "));
}
