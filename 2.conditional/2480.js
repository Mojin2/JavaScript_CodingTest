const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2480.txt"; // 제출시 삭제

const readline = require("readline");
const rl = readline.createInterface({
  // input: process.stdin, // 제출시 활성화
  input: fs.createReadStream(path), // 제출시 삭제
  output: process.stdout,
});

let input;
let list = [];
rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  list = input.split(" ").map((el) => Number(el));
  solution(list);
  process.exit();
});

function solution(list) {
  let set = new Set(list);
  if (set.size === 1) {
    let price = 10000 + list[0] * 1000;
    console.log(price);
  } else if (set.size === 2) {
    if (list[0] === list[1] || list[0] === list[2]) {
      let price = 1000 + list[0] * 100;
      console.log(price);
    } else {
      let price = 1000 + list[1] * 100;
      console.log(price);
    }
  } else if (set.size === 3) {
    let price = Math.max(...list) * 100;
    console.log(price);
  }
}
