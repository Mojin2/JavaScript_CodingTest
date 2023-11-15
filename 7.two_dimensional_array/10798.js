const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/10798.txt"; // 제출시 삭제

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
    list.push(val);
  });
  solution(list);
  process.exit();
});
function solution(list) {
  let answer = [];
  let length = [];
  for (let i = 0; i < list.length; i++) {
    length.push(list[i].length);
  }
  let len = Math.max(...length);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[j][i] === undefined) {
        continue;
      }
      answer.push(list[j][i]);
    }
  }
  console.log(answer.join(""));
}
