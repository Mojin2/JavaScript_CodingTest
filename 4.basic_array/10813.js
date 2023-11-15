const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/10813.txt"; // 제출시 삭제

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
  list.shift();
  let array = Array(n)
    .fill(0)
    .map((_, index) => index);
  for (let i = 0; i < m; i++) {
    let tmp = array[list[i][0] - 1];
    array[list[i][0] - 1] = array[list[i][1] - 1];
    array[list[i][1] - 1] = tmp;
  }
  let answer = array.map((el) => el + 1);
  console.log(answer.join(" "));
}
