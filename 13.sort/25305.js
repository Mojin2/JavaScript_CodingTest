const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/25305.txt"; // 제출시 삭제

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
    list.push(val.split(" ").map((el) => parseInt(el)));
  });
  solution(list);
  process.exit();
});
function solution(list) {
  const N = list[0][0];
  const k = list[0][1];
  list = list[1].sort((a, b) => a - b);
  console.log(list[N - k]);
}
