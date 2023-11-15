const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/3003.txt"; // 제출시 삭제

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

let set = [1, 1, 2, 2, 2, 8];
function solution(list) {
  let array = list.map((el, index) => set[index] - el);
  console.log(array.join(" "));
}
