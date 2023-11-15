const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/14681.txt"; // 제출시 삭제

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
  const x = list[0][0];
  const y = list[1][0];
  if (x > 0 && y > 0) console.log(1);
  if (x < 0 && y > 0) console.log(2);
  if (x < 0 && y < 0) console.log(3);
  if (x > 0 && y < 0) console.log(4);
}
