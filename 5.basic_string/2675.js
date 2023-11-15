const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2675.txt"; // 제출시 삭제

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
  let n = Number(list[0][0]);
  list.shift();
  for (let i = 0; i < list.length; i++) {
    let result = "";
    let times = Number(list[i][0]);
    let string = list[i][1].split("");
    for (let j = 0; j < string.length; j++) {
      for (let k = 0; k < times; k++) {
        result += string[j];
      }
    }
    console.log(result);
  }
}
