const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/5073.txt"; // 제출시 삭제

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
function check(array) {
  let set = new Set(array);
  let max = Math.max(...array);
  let sum = array.reduce((acc, cur) => acc + cur) - max;
  if (max >= sum) {
    console.log("Invalid");
  } else {
    if (set.size === 1) {
      console.log("Equilateral");
    } else if (set.size === 2) {
      console.log("Isosceles");
    } else {
      console.log("Scalene");
    }
  }
}
function solution(list) {
  list.pop();
  list.forEach((el) => check(el));
}
