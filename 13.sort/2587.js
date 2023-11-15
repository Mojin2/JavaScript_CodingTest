const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2587.txt"; // 제출시 삭제

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
    list.push(Number(val));
  });
  solution(list);
  process.exit();
});
function solution(list) {
  console.log(list.reduce((acc, cur) => acc + cur) / list.length);
  list = list.sort((a, b) => a - b);
  console.log(list[2]);
}
