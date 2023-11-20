const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1541.txt"; // 제출시 삭제

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
    list.push(val);
  });
  solution(list);
  process.exit();
});
function solution(list) {
  let string = list[0];
  let cal = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "+" || string[i] === "-") {
      cal.push(string[i]);
    }
  }
  let number = string.split(/[+-]/).map((el) => Number(el));
  let start = number.shift();
  while (true) {
    if (number.length === 0) {
      break;
    }
    let num = number.shift();
    let ca = cal.shift();
    if (ca === "+") {
      start += num;
    } else if (ca === "-") {
      if (num.length === 0) {
        let allSum = num;
        start -= allSum;
        break;
      } else {
        let allSum = num + number.reduce((acc, cur) => acc + cur, 0);
        start -= allSum;
        break;
      }
    }
  }
  console.log(start);
}
