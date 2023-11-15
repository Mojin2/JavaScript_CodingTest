const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/4949.txt"; // 제출시 삭제

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
    list.push(val);
  });
  solution(list);
  process.exit();
});
function check(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "(" ||
      string[i] === ")" ||
      string[i] === "[" ||
      string[i] === "]"
    ) {
      arr.push(string[i]);
    }
    if (arr[arr.length - 1] === ")" && arr[arr.length - 2] === "(") {
      arr.pop();
      arr.pop();
    }
    if (arr[arr.length - 1] === "]" && arr[arr.length - 2] === "[") {
      arr.pop();
      arr.pop();
    }
  }
  arr.length <= 0 ? console.log("YES") : console.log("NO");
}
function solution(list) {
  list.pop();
  list.forEach((el) => check(el));
}
