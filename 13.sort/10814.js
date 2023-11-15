const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/10814.txt"; // 제출시 삭제

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
    list.push(val.split(" "));
  });
  solution(list);
  process.exit();
});
function solution(list) {
  const n = Number(list.shift()[0]);
  list.sort((a, b) => {
    return Number(a[0]) - Number(b[0]);
  });
  list = list.map((el) => el.join(" "));
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}
