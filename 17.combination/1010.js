const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1010.txt"; // 제출시 삭제

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
function fac(n) {
  if (n === 0 || n === 1) return 1;

  if (n >= 2) {
    return n * fac(n - 1);
  }
}
//function solution(list) {
// console.log(list);
// list.shift();
// list.forEach((el) => {
//   let n = el[1];
//   let arr = Array(n)
//     .fill(0)
//     .map((_, index) => index + 1);
//   let k = el[0];
//   let tmp = [];
//   let count = 0;
//   function backtrack(cur) {
//     if (tmp.length === k) {
//       count++;
//       return;
//     }
//     for (let i = cur; i < arr.length; i++) {
//       tmp.push(arr[i]);
//       backtrack(i + 1);
//       tmp.pop();
//     }
//   }
//   backtrack(0);
//   console.log(count);
// });
// }
function solution(list) {
  let result = [];
  list.shift();
  list.forEach((el) => {
    let n = Number(el[1]);
    let k = Number(el[0]);
    let answer = fac(n) / (fac(n - k) * fac(k));
    result.push(Math.round(answer));
  });
  console.log(result.join("\n"));
}
