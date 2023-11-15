const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/10988.txt"; // 제출시 삭제

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
  list = input;
  solution(list);
  process.exit();
});
function solution(list) {
  list = list.split("");
  list_original = [...list];
  list_reversed = list.reverse();
  console.log(list_original.join("") === list_reversed.join("") ? "1" : "0");
}
