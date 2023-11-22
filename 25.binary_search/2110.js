const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2110.txt"; // 제출시 삭제

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
  let [[N, C], ...arr] = list;
  arr = arr.reduce((acc, cur) => acc.concat(cur));
  console.log(arr);
}

// [1 2 4 8 9]
// [1,2,3,4,5,6,7,8,9]
