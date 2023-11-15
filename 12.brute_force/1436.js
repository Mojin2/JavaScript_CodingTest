const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1436.txt"; // 제출시 삭제

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
  let number = 666;
  let index = 0;
  const regex = /666/;
  while (true) {
    if (regex.test(number.toString())) {
      index += 1;
      if (index === N) {
        console.log(number);
        break;
      }
    }
    number += 1;
  }
}
