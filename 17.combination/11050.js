const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/11050.txt"; // 제출시 삭제

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
function fac(n) {
  if (n === 0 || n === 1) return 1;

  if (n >= 2) {
    return n * fac(n - 1);
  }
}
function solution(list) {
  let n = list[0][0];
  let k = list[0][1];

  let answer = fac(n) / (fac(n - k) * fac(k));
  console.log(answer);
}
