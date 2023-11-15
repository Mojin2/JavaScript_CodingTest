const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2903.txt"; // 제출시 삭제

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
  let n = list[0];
  let array = [2];
  for (let i = 0; i < n; i++) {
    array.push(array[i] + array[i] - 1);
  }
  console.log(Math.pow(array[n], 2));
}

// 1 3
// 2 5
// 3 9
// 4 17
// 5 33
