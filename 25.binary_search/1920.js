const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1920.txt"; // 제출시 삭제

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
let answer = [];
function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] === target) {
      answer.push(1);
      return;
    } else if (array[mid] > target) {
      high = mid - 1;
    } else if (array[mid] < target) {
      low = mid + 1;
    }
  }
  answer.push(0);
}
function solution(list) {
  let [[N], arr, [M], targets] = list;
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < M; i++) {
    binarySearch(arr, targets[i]);
  }
  console.log(answer.join("\n"));
}
