const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2839.txt"; // 제출시 삭제

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
  const N = list[0];
  let array = [];
  for (let i = 0; i < 5000; i++) {
    for (let j = 0; j < 5000; j++) {
      let cal = 5 * i + 3 * j;
      if (cal === N) {
        array.push(i + j);
      }
    }
  }
  if (array.length === 0) {
    console.log(-1);
  } else {
    console.log(Math.min(...array));
  }
}
