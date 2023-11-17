const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2559.txt"; // 제출시 삭제

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
  const [N, K] = list[0]; // N = 10 , K = 2
  let arr = list[1];
  let cumSum = [];
  for (let i = 0; i < arr.length - K + 1; i++) {
    let count = 1;
    let sum = arr[i];
    for (let j = i + 1; j <= arr.length; j++) {
      if (count === K) {
        cumSum.push(sum);
        break;
      }
      sum = sum + arr[j];
      count += 1;
    }
  }
  console.log(Math.max(...cumSum));
}
