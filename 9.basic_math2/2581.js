const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2581.txt"; // 제출시 삭제

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
  let array = [];
  for (let i = list[0]; i <= list[1]; i++) {
    let number = i;
    let count = 0;
    for (let k = 1; k <= number; k++) {
      if (number % k === 0) {
        count += 1;
      }
    }
    if (count === 2) {
      array.push(number);
    }
  }
  if (array.length === 0) {
    console.log(-1);
  } else {
    console.log(array.reduce((acc, cur) => acc + cur));
    console.log(array[0]);
  }
}
