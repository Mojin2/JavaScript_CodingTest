const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/25192.txt"; // 제출시 삭제

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
  const n = Number(list.shift());
  let set = new Set();
  let answer = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === "ENTER") {
      answer += set.size;
      set.clear();
    }
    if (list[i] !== "ENTER") {
      set.add(list[i]);
    }
    if (i === list.length - 1) {
      answer += set.size;
    }
  }
  console.log(answer);
}
