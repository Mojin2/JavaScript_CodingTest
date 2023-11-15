const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/5086.txt"; // 제출시 삭제

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
  let n = list.length - 1;
  for (let i = 0; i < n; i++) {
    if (list[i][0] > list[i][1]) {
      if (list[i][0] % list[i][1] === 0) {
        console.log("multiple");
      } else {
        console.log("neither");
      }
    } else if (list[i][0] < list[i][1]) {
      if (list[i][1] % list[i][0] === 0) {
        console.log("factor");
      } else {
        console.log("neither");
      }
    }
  }
}
