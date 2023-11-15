const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1085.txt"; // 제출시 삭제

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
  list = input.split(" ").map((el) => Number(el));
  solution(list);
  process.exit();
});
function solution(list) {
  let position = [list[0], list[1]];
  let end = [list[2], list[3]];
  let array = [];
  for (let i = 0; i < position.length; i++) {
    array.push(Math.abs(position[i] - end[i]));
  }
  array.push(...position);
  console.log(Math.min(...array));
}
