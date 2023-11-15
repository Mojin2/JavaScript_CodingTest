const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/11653.txt"; // 제출시 삭제

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
  let number = list[0];
  let index = 2;
  while (true) {
    if (number === 1) {
      break;
    }
    if (number % index === 0) {
      console.log(index);
      number = number / index;
      if (number === 1) {
        break;
      }
    } else {
      index += 1;
    }
  }
}
