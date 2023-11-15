const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/10815.txt"; // 제출시 삭제

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
  let m = list[2][0];
  let sangun = list[1];
  let array = list[3];
  let answer = "";
  ///////////////////////////////
  let arr = {};
  for (let i = 0; i < sangun.length; i++) {
    arr[sangun[i]] = 1;
  }
  for (let i = 0; i < array.length; i++) {
    if (arr[array[i]] !== undefined) {
      answer += 1 + " ";
    } else {
      answer += 0 + " ";
    }
  }
  console.log(answer);
}
