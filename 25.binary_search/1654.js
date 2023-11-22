const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1654.txt"; // 제출시 삭제

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
  let [[K, N], ...array] = list; // K = 4 , N = 11
  array = array.reduce((acc, cur) => acc.concat(cur)).sort((a, b) => a - b);
  let index = 1;
  while (true) {
    let one = parseInt(array[0] / index);
    let two = parseInt(array[1] / index);
    let three = parseInt(array[2] / index);
    let four = parseInt(array[3] / index);
  }
  console.log(array);
}
