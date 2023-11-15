const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/9663.txt"; // 제출시 삭제

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
  list = input;
  solution(list);
  process.exit();
});

let arr = [];
let count = 0;
let isi = false;
function nqueen(n) {
  let array = Array(n)
    .fill(0)
    .map((_, idx) => idx);
  if (arr.length === n) {
    count += 1;
    return;
  } else {
    for (let i = 0; i < array.length; i++) {
      isi = false;
      if (arr.includes(array[i])) continue;
      for (let k = 0; k < arr.length; k++) {
        if (Math.abs(arr[k] - array[i]) === Math.abs(k - arr.length)) {
          isi = true;
          break;
        }
      }
      if (isi) continue;
      arr.push(array[i]);
      nqueen(n);
      arr.pop();
    }
  }
}
function solution(list) {
  const n = Number(list);
  nqueen(n);
  console.log(count);
}
