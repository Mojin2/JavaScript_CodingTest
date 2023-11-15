const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/11720.txt"; // 제출시 삭제

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
  input.forEach((val, index) => {
    if (index === 0) {
      list.push(val.split(" ").map((el) => parseInt(el)));
    } else {
      list.push(val.split(" "));
    }
  });
  solution(list);
  process.exit();
});
function solution(list) {
  let n = list[0][0];
  let array = list[1][0];
  array = array.split("").map((el) => el * 1);
  console.log(array.reduce((acc, cur) => acc + cur));
}
