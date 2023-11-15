const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2447.txt"; // 제출시 삭제

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

let line = [];

function stars(i, j, num) {
  if (i % 3 === 1 && j % 3 === 1) {
    line.push(" ");
  } else {
    if (num === 1) {
      line.push("*");
    } else {
      stars(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
    }
  }
}
function solution(list) {
  const n = list[0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      stars(i, j, n);
    }
    line.push("\n");
  }
  console.log(line.join(""));
}
