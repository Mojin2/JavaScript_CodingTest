const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/11054.txt"; // 제출시 삭제

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
  const n = list[0];
  let arr = list[1];

  let i_dp = Array(Number(n)).fill(1);
  for (let i = 0; i < i_dp.length; i++) {
    const current = arr[i];
    let count = 1;
    for (let j = 0; j < i; j++) {
      const before = arr[j];
      if (current > before) count = Math.max(i_dp[j] + 1, count);
    }
    i_dp[i] = count;
  }

  let d_dp = Array(Number(n)).fill(1);
  for (let i = n - 2; i >= 0; i--) {
    const current = arr[i];
    let count = 1;
    for (let j = i + 1; j < n; j++) {
      const before = arr[j];
      if (current > before) count = Math.max(d_dp[j] + 1, count);
    }
    d_dp[i] = count;
  }
  let sum = Array(Number(n)).fill(0);
  for (let i = 0; i < i_dp.length; i++) {
    sum[i] = i_dp[i] + d_dp[i];
  }
  console.log(Math.max(...sum) - 1);
}

// [1,5,2,1,4,3,4,5,2,1]
// [1,1,2,3,3]
