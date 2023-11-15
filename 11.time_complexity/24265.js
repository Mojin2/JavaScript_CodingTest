const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/24265.txt"; // 제출시 삭제

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
function solution(list) {
  //   let array = Array(list[0] - 1)
  //     .fill(0)
  //     .map((_, index) => index + 1);
  let num = 0;
  for (let i = 1; i <= list[0] - 1; i++) {
    num += i;
  }
  console.log(num);
  console.log(2);
}
