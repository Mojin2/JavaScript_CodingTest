const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/10816.txt"; // 제출시 삭제

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
  const n = list[0][0];
  const m = list[2][0];
  let array = list[1];
  let arr = list[3];
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) {
      let count = map.get(array[i]);
      map.set(array[i], count + 1);
    } else {
      map.set(array[i], 1);
    }
  }
  let answer = [];
  arr.forEach((el) => {
    if (map.get(el)) answer.push(map.get(el));
    else answer.push(0);
  });
  console.log(answer.join(" "));
}
