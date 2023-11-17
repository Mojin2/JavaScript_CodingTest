const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/10986.txt"; // 제출시 삭제

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
  const n = Number(list[0][0]);
  const m = Number(list[0][1]);
  let arr = list[1];
  let count = 0;
  let sum = Array(arr.length).fill(0);
  let dic = Array(m).fill(0);
  sum[0] = arr[0];
  dic[arr[0] % m] += 1;
  for (let i = 1; i < arr.length; i++) {
    sum[i] = sum[i - 1] + arr[i];
    if (sum[i] % m === 0) count += 1;
    dic[sum[i] % m] += 1;
  }
  for (let i = 0; i < m; i++) {
    count += (dic[i] * (dic[i] - 1)) / 2;
  }

  console.log(count);
}

// 1 2 3 1 2
// 0 1
// 0 2
// 0 4
// 1 3
// 2 2
// 2 4
// 3 4
