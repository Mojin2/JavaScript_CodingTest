const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2805.txt"; // 제출시 삭제

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
  let [[N, M], arr] = list;
  arr = arr.sort((a, b) => a - b);
  let min = 0;
  let max = Math.max(...arr);

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let tmp = arr
      .map((el) => {
        if (el - mid >= 0) return el - mid;
        else return 0;
      })
      .reduce((acc, cur) => acc + cur);
    if (tmp >= M) min = mid + 1;
    else max = mid - 1;
  }
  console.log(max);
}
