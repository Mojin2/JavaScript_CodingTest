const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1181.txt"; // 제출시 삭제

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
  let set = new Set(list);
  let array = Array(...set);
  array.sort((a, b) => a.length - b.length);
  array.sort((a, b) => {
    if (a.length === b.length) {
      let len = a.length;
      let index = 0;
      while (true) {
        if (a[index] === b[index]) {
          index += 1;
        } else {
          return a[index].charCodeAt() - b[index].charCodeAt();
        }
      }
    }
  });
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
