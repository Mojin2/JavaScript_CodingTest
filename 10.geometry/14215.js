const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/14215.txt"; // 제출시 삭제

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
function check(array) {
  let set = new Set(array);
  let max = Math.max(...array);
  let sum = array.reduce((acc, cur) => acc + cur) - max;
  if (max >= sum) {
    return "Invalid";
  } else {
    if (set.size === 1) {
      return "Equilateral";
    } else if (set.size === 2) {
      return "Isosceles";
    } else {
      return "Scalene";
    }
  }
}
function solution(list) {
  if (check(list) === "Equilateral") {
    console.log(list.reduce((acc, cur) => acc + cur));
  } else {
    let max = Math.max(...list);
    let sum = list.reduce((acc, cur) => acc + cur) - max;
    if (sum > max) {
      console.log(list.reduce((acc, cur) => acc + cur));
    } else if (sum <= max) {
      max = sum - 1;
      console.log(max + sum);
    }
  }
}
