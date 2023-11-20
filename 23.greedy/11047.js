const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/11047.txt"; // 제출시 삭제

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
    list.push(val.split(" ").map((el) => Number(el)));
  });
  solution(list);
  process.exit();
});
function solution(list) {
  let [N, K] = list[0];
  let count = 0;
  list.shift();
  let coins = list.reduce((acc, cur) => acc.concat(cur)).sort((a, b) => b - a);
  for (let i = 0; i < coins.length; i++) {
    if (K / coins[i] >= 1) {
      count += Math.floor(K / coins[i]);
    }
    K = K % coins[i];
  }
  console.log(count);
}
