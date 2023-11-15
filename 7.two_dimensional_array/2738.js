const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2738.txt"; // 제출시 삭제

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
  let n = list[0][0];
  let m = list[0][1];
  list.shift();
  let a = list.slice(0, n);
  let b = list.slice(n);

  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < m; j++) {
      arr.push(a[i][j] + b[i][j]);
    }
    console.log(arr.join(" "));
  }
}
