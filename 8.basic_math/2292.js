const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2292.txt"; // 제출시 삭제

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
  let n = list[0];
  let a = 1;
  let b = 2;
  let i = 1;
  while (true) {
    if (n === 1) {
      console.log(1);
      break;
    }
    if (a <= n && n < b) {
      console.log(i);
      break;
    }
    a = b;
    b = b + 6 * i;
    i++;
  }
}
