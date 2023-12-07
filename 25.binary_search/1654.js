const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1654.txt"; // 제출시 삭제

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
  let [[K, N], ...array] = list; // K = 4 , N = 11
  array = array.reduce((acc, cur) => acc.concat(cur)).sort((a, b) => a - b);
  let left = 1;
  let right = Math.max(...array);
  let max = Number.MIN_SAFE_INTEGER;
  while (left <= right) {
    let half = Math.floor((left + right) / 2);

    let count = array
      .map((el) => Math.floor(el / half))
      .reduce((acc, cur) => acc + cur);

    if (count >= N) {
      if (half > max) {
        max = half;
      }
      left = half + 1;
    } else {
      right = half - 1;
    }
  }
  console.log(max);
}
