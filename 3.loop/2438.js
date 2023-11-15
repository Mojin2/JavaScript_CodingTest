const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2438.txt"; // 제출시 삭제

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
  let star = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
    star = "";
  }
}
