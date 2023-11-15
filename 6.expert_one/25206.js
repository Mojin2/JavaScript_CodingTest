const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/25206.txt"; // 제출시 삭제

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
  list = list.filter((el) => el[2] !== "P");
  let sum = list.map((el) => Number(el[1])).reduce((acc, cur) => acc + cur);
  let total = list
    .map((el) => {
      let grade;
      el[2] === "A+"
        ? (grade = 4.5)
        : el[2] === "A0"
        ? (grade = 4.0)
        : el[2] === "B+"
        ? (grade = 3.5)
        : el[2] === "B0"
        ? (grade = 3.0)
        : el[2] === "C+"
        ? (grade = 2.5)
        : el[2] === "C0"
        ? (grade = 2.0)
        : el[2] === "D+"
        ? (grade = 1.5)
        : el[2] === "D0"
        ? (grade = 1.0)
        : (grade = 0.0);
      return grade * Number(el[1]);
    })
    .reduce((acc, cur) => acc + cur);
  console.log((total / sum).toFixed(6));
}
