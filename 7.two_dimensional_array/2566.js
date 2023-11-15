const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2566.txt"; // 제출시 삭제

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
  let max = [];
  for (let i = 0; i < list.length; i++) {
    max.push(Math.max(...list[i]));
  }
  let max_result = Math.max(...max);
  console.log(max_result);
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      if (list[i][j] === max_result) {
        console.log(`${i + 1} ${j + 1}`);
      }
    }
  }
}
