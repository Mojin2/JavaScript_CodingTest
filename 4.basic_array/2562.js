const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2562.txt"; // 제출시 삭제

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
  let array = list.reduce((acc, cur) => acc.concat(cur));
  let max = Math.max(...array);
  console.log(`${max} ${array.indexOf(max) + 1}`);
}
