const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2231.txt"; // 제출시 삭제

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
function IsDisassemble(number) {
  let original = number;
  let n = number.toString().split("").length - 1;
  let array = [];
  for (let i = n; i >= 0; i--) {
    let integer = parseInt(number / Math.pow(10, i));
    array.push(integer);
    number = number % Math.pow(10, i);
  }
  return array.reduce((acc, cur) => acc + cur) + original;
}
function solution(list) {
  let N = list[0];
  let i = 1;
  while (true) {
    if (i >= N) {
      console.log(0);
      break;
    }
    if (IsDisassemble(i) === N) {
      console.log(i);
      break;
    }
    i++;
  }
}
