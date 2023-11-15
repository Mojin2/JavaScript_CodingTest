const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/10101.txt"; // 제출시 삭제

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
  list = list.reduce((acc, cur) => acc.concat(cur));
  let set = new Set(list);
  if (list.filter((el) => el === 60).length === 3) {
    console.log("Equilateral");
  } else if (list.reduce((acc, cur) => acc + cur) === 180 && set.size === 2) {
    console.log("Isosceles");
  } else if (list.reduce((acc, cur) => acc + cur) === 180 && set.size === 3) {
    console.log("Scalene");
  } else {
    console.log("Error");
  }
}
