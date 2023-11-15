const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2941.txt"; // 제출시 삭제

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
  list = list
    .replaceAll("c=", "A")
    .replaceAll("c-", "A")
    .replaceAll("dz=", "A")
    .replaceAll("d-", "A")
    .replaceAll("lj", "A")
    .replaceAll("nj", "A")
    .replaceAll("s=", "A")
    .replaceAll("z=", "A");
  console.log(list.length);
}
