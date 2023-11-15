const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/9063.txt"; // 제출시 삭제

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
  const n = list[0][0];
  list.shift();
  let first = list.map((el) => el[0]);
  let second = list.map((el) => el[1]);
  let x = Math.max(...first) - Math.min(...first);
  let y = Math.max(...second) - Math.min(...second);

  console.log(x * y);
}
