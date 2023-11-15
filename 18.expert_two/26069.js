const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/26069.txt"; // 제출시 삭제

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
  list.shift();
  let arr = new Set();
  arr.add("ChongChong");
  for (let i = 0; i < list.length; i++) {
    if (arr.has(list[i][0]) || arr.has(list[i][1])) {
      arr.add(list[i][0]);
      arr.add(list[i][1]);
    }
  }
  console.log(arr.size);
}
