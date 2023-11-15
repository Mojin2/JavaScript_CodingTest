const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/4948.txt"; // 제출시 삭제

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
function check(num) {
  let arr = Array(num + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= num; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}
function solution(list) {
  list = list.map((el) => Number(el));
  list.pop();
  list.forEach((el) => {
    let arr = check(2 * el);
    let answer = [];
    arr.forEach((item, index) => {
      if (item === true && index > el) {
        answer.push(index);
      }
    });
    console.log(answer.length);
  });
}
