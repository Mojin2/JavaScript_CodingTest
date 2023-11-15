const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1929.txt"; // 제출시 삭제

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
function check(num) {
  let arr = Array(num + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= num; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}
function solution(list) {
  const m = list[0];
  const n = list[1];
  let answer = check(n);
  answer.forEach((el, index) => {
    if (el === true && index >= m) {
      console.log(index);
    }
  });
}
