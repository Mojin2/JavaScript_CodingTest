const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1193.txt"; // 제출시 삭제

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
  let sum = 0;
  let i = 1;
  while (true) {
    if (n === 1) {
      console.log("1/1");
      break;
    }
    sum += i;
    if (sum >= n) {
      let count = n - (sum - i) - 1;
      if (i % 2 === 0) {
        i = i - count;
        let k = 1 + count;
        console.log(`${k}/${i}`);
      } else if (i % 2 !== 0) {
        i = i - count;
        let k = 1 + count;
        console.log(`${i}/${k}`);
      }
      break;
    }
    i += 1;
  }
}
// input : 14 output : 2/4
// 1 2 3 4 5 6
