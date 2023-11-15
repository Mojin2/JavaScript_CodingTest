const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1904.txt"; // 제출시 삭제

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

let result = [0, 1, 2];

function recursive(num) {
  if (result[num]) {
    return result[num];
  }
  result[num] = (recursive(num - 1) + recursive(num - 2)) % 15746;
  return result[num];
}
function solution(list) {
  const n = Number(list[0]);
  console.log(recursive(n) % 15746);
}
