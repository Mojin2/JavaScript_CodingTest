const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1157.txt"; // 제출시 삭제

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
  list = input;
  solution(list);
  process.exit();
});
function solution(list) {
  let array = Array(26).fill(0);
  list = list.toLowerCase();
  for (let i = 0; i < list.length; i++) {
    let index = list[i].charCodeAt() - 97;
    array[index] += 1;
  }
  let max = Math.max(...array);
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === max) {
      result.push(i);
    }
  }
  if (result.length > 1) {
    console.log("?");
  } else {
    console.log(String.fromCharCode(result[0] + 97).toUpperCase());
  }
}
