const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/13305.txt"; // 제출시 삭제

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
  const n = list[0][0];
  const km = list[1];
  const oil = list[2];
  let result = 0n;

  for (let i = 0; i < n - 1; i++) {
    if (oil[i] > oil[i + 1]) {
      result += BigInt(km[i]) * BigInt(oil[i]);
    } else {
      if (i === n - 2) {
        result += BigInt(km[i]) * BigInt(oil[i]);
      } else {
        oil[i + 1] = oil[i];
        km[i + 1] += km[i];
      }
    }
  }
  console.log(result.toString());
}
