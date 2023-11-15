const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2501.txt"; // 제출시 삭제

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
  let N = list[0];
  let K = list[1];
  let array = [];
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      array.push(i);
    }
  }
  if (array.length < K) {
    console.log(0);
  } else {
    console.log(array[K - 1]);
  }
}
