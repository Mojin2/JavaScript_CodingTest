const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/10809.txt"; // 제출시 삭제

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
  list = input.split(" ");
  solution(list);
  process.exit();
});
function solution(list) {
  let alpabet = Array(26)
    .fill(0)
    .map((v, i) => String.fromCharCode(i + 97));
  let answer = alpabet.map((el) => list[0].indexOf(el));
  console.log(answer.join(" "));
}
