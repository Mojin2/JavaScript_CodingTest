const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/24416.txt"; // 제출시 삭제

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
let count = 0;
let count_dp = 0;
function fibo(num) {
  if (num === 1 || num === 2) {
    count += 1;
    return 1;
  } else {
    return fibo(num - 1) + fibo(num - 2);
  }
}
function fibo_dp(n) {
  let arr = [0, 1, 1];
  let fib = (n) => {
    if (arr[n] !== undefined) {
      return arr[n];
    }
    arr[n] = fib(n - 1) + fib(n - 2);
    count_dp += 1;
    return arr[n];
  };
  return fib(n);
}
// [0,1,1,2,3,5]
function solution(list) {
  const n = list[0];
  fibo(n);
  console.log(count);
  fibo_dp(n);
  console.log(count_dp);
}
