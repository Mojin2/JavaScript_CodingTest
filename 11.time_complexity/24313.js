const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/24313.txt"; // 제출시 삭제

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
  const [a, b] = list[0];
  const c = +list[1];
  const n0 = +list[2];

  console.log(+(b <= (c - a) * n0 && c >= a));
}
