const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2108.txt"; // 제출시 삭제

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
  list = list.map((el) => Number(el));
  list.shift();
  list = list.sort((a, b) => a - b);
  let answer = [];
  let dic = {};
  //1
  answer.push(Math.round(list.reduce((acc, cur) => acc + cur) / list.length));
  //2
  answer.push(list[(list.length - 1) / 2]);
  //3
  for (let i = 0; i < list.length; i++) {
    if (dic[list[i]]) {
      dic[list[i]] += 1;
    } else {
      dic[list[i]] = 1;
    }
  }
  let sorted = Object.entries(dic).sort((a, b) => b[1] - a[1]);
  sorted.sort((a, b) => {
    if (a[1] === b[1]) {
      return Number(a[0]) - Number(b[0]);
    }
  });
  if (sorted.length >= 2) {
    if (sorted[0][1] === sorted[1][1]) {
      answer.push(Number(sorted[1][0]));
    } else {
      answer.push(Number(sorted[0][0]));
    }
  }
  if (sorted.length < 2) {
    answer.push(Number(sorted[0][0]));
  }

  //4
  answer.push(Math.max(...list) - Math.min(...list));
  console.log(answer.join("\n"));
}
