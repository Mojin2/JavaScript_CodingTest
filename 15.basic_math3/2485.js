const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2485.txt"; // 제출시 삭제

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
function cal(array) {
  let result = array[0];
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  for (let i = 1; i < array.length; i++) {
    let tmp = gcd(result, array[i]);
    result = tmp;
  }
  return result;
}
function solution(list) {
  list.shift();
  list = list.map((el) => Number(el));
  let array = [];
  for (let i = 0; i < list.length - 1; i++) {
    array.push(list[i + 1] - list[i]);
  }
  let index = cal(array);
  array = array.map((el) => el / index - 1);
  console.log(array.reduce((acc, cur) => acc + cur));
}
