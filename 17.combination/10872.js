const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/10872.txt"; // 제출시 삭제

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
function fac(n) {
  if (n === 0 || n === 1) return 1;

  if (n >= 2) {
    return n * fac(n - 1);
  }
}
function solution(list) {
  const n = list[0];
  console.log(fac(n));
}
