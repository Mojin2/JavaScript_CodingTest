const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/10811.txt"; // 제출시 삭제

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
  let m = list[0][1];
  let array = Array(n)
    .fill(0)
    .map((_, index) => index + 1);
  list.shift();
  list = list.map((els) => els.map((el) => el - 1));
  for (let i = 0; i < list.length; i++) {
    let start = list[i][0];
    let end = list[i][1];
    let count = end - start + 1;
    let tmp = array.splice(start, count);
    array.splice(start, 0, ...tmp.reverse());
  }
  console.log(array.join(" "));
}
