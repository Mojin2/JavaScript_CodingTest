const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/12789.txt"; // 제출시 삭제

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
  const arr = list[1];
  let index = 1;
  let stack = [];
  while (true) {
    if (arr.length === 0 && stack.length === 0) {
      console.log("Nice");
      break;
    }
    if (arr[0] === index) {
      arr.shift();
      index += 1;
    } else if (stack[stack.length - 1] === index) {
      stack.pop();
      index += 1;
    } else {
      if (arr.length === 0) {
        console.log("Sad");
        break;
      }
      stack.push(arr[0]);
      arr.shift();
    }
  }
}
