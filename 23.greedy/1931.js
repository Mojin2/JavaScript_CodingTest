const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1931.txt"; // 제출시 삭제

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
  const N = list[0][0];
  let arr = list.slice(1);
  arr = arr.sort((a, b) => a[1] - b[1]);
  arr = arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
  });
  let count = 1;
  let start = arr[0][0];
  let finish = arr[0][1];
  for (let i = 1; i < N; i++) {
    if (finish <= arr[i][0]) {
      start = arr[i][0];
      finish = arr[i][1];
      count += 1;
    }
  }
  console.log(arr);
}
