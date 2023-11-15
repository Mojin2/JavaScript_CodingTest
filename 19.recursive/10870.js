const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/10870.txt"; // 제출시 삭제

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
  list = input;
  solution(list);
  process.exit();
});
// [0,1,1,2,3,5,8,13,21,34...]
function fibo(num) {
  if (num <= 1) {
    return num;
  } else if (num >= 2) {
    return fibo(num - 1) + fibo(num - 2);
  }
}
function solution(list) {
  const n = list;
  console.log(fibo(n));
}
