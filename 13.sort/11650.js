const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/11650.txt"; // 제출시 삭제

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
  const n = list[0][0];
  list.shift();
  list = list.sort((a, b) => a[0] - b[0]);
  list = list.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
  });
  list = list.map((el) => el.join(" "));
  console.log(list.join("\n"));
}
