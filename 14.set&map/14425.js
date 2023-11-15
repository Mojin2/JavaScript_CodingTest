const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/14425.txt"; // 제출시 삭제

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
  const n = Number(list[0][0]);
  const m = Number(list[0][1]);
  list.shift();
  list = list.reduce((acc, cur) => acc.concat(cur));
  let array = list.slice(0, n);
  let target = list.slice(n);
  let count = 0;
  let arr = {};
  for (let i = 0; i < target.length; i++) {
    if (arr[target[i]] >= 1) {
      arr[target[i]] += 1;
    } else {
      arr[target[i]] = 1;
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (arr[array[i]] !== undefined) {
      count += arr[array[i]];
    }
  }
  console.log(count);
}
