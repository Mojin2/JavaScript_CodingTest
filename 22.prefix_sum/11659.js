const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/11659.txt"; // 제출시 삭제

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
  let answer = [];
  const [N, M] = list[0];
  let arr = list[1];
  let option = list.slice(2);
  let pre_sum = Array(arr.length);
  let sum = 0;
  for (let i = 0; i < pre_sum.length; i++) {
    sum = sum + arr[i];
    pre_sum[i] = sum;
  }
  option.forEach((el) => {
    if (el[0] === 1) {
      answer.push(pre_sum[el[1] - 1]);
    } else {
      answer.push(pre_sum[el[1] - 1] - pre_sum[el[0] - 2]);
    }
  });
  console.log(answer.join("\n"));
}
