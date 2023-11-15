const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1978.txt"; // 제출시 삭제

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
  let n = list[0][0];
  let array = list[1];
  let count = 0;
  for (let i = 0; i < n; i++) {
    let number = array[i];
    let arr = [];
    for (let k = 1; k <= number; k++) {
      if (number % k === 0) {
        arr.push(k);
        if (arr.length >= 3) {
          continue;
        }
      }
    }
    if (arr.length === 2) {
      count += 1;
    }
  }
  console.log(count);
}
