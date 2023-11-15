const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2720.txt"; // 제출시 삭제

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
function autoChanger(number) {
  let array = [];
  array.push(parseInt(number / 25));
  number = number % 25;
  array.push(parseInt(number / 10));
  number = number % 10;
  array.push(parseInt(number / 5));
  number = number % 5;
  array.push(parseInt(number / 1));
  console.log(array.join(" "));
}
function solution(list) {
  list = list.map((el) => Number(el));
  let n = list[0];
  list.shift();
  list.forEach((el) => autoChanger(el));
}
