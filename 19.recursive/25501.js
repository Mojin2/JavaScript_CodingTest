const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/25501.txt"; // 제출시 삭제

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
let count = 0;
function recursion(string, l, r) {
  count += 1;
  if (l >= r) {
    let num = count;
    count = 0;
    return [1, num];
  } else if (string[l] !== string[r]) {
    let num = count;
    count = 0;
    return [0, num];
  } else return recursion(string, l + 1, r - 1);
}
function isPalindrome(string) {
  return recursion(string, 0, string.length - 1);
}
function solution(list) {
  const n = Number(list[0]);
  let arr = list.slice(1);
  arr.forEach((el) => {
    console.log(isPalindrome(el).join(" "));
  });
}
