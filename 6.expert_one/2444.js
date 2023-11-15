const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2444.txt"; // 제출시 삭제

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
  let input = list[0];
  for (let i = 0; i < input * 2 - 1; i++) {
    let result = "";
    if (i < input) {
      for (let j = 0; j < input + i; j++) {
        if (j < input - (i + 1)) {
          result += " ";
        } else {
          result += "*";
        }
      }
    }
    if (i >= input) {
      for (let k = 0; k <= input * 2 - 1; k++) {
        if (k < i - input + 1) {
          result += " ";
        } else if (k <= 2 * (input - 1) - (i - (input - 1))) {
          result += "*";
        }
      }
    }
    console.log(result);
  }
}
