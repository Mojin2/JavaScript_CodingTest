const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2884.txt"; // 제출시 삭제

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
  let hour = list[0];
  let min = list[1];

  if (min >= 45) {
    min = min - 45;
  } else if (min < 45) {
    if (hour === 0) hour = 23;
    else if (hour !== 0) hour -= 1;
    min = 60 + (min - 45);
  }
  console.log(`${hour} ${min}`);
}
