const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2565.txt"; // 제출시 삭제

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
  const K = Number(list[0][0]);
  list = list.slice(1);
  list = list.sort((a, b) => a[0] - b[0]);
  let arr = [];
  list.forEach((el) => arr.push(el[1]));

  // LIS 오름차순
  let n = arr.length;
  let dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    let cur = arr[i];
    let count = 1;
    for (let j = 0; j < i; j++) {
      let before = arr[j];
      if (cur > before) count = Math.max(dp[j] + 1, count);
    }
    dp[i] = count;
  }
  console.log(K - Math.max(...dp));
}
// [8,2,9,1,4,6,7,10]
