const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/11399.txt"; // 제출시 삭제

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
  const N = list[0][0];
  let arr = list[1];

  arr = arr.sort((a, b) => a - b);
  let culSum = Array(N).fill(0);
  culSum[0] = arr[0];
  for (let i = 1; i < N; i++) {
    culSum[i] = culSum[i - 1] + arr[i];
  }
  let answer = culSum.reduce((acc, cur) => acc + cur);
  console.log(answer);
}
