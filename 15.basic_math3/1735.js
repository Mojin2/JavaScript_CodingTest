const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1735.txt"; // 제출시 삭제

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

function cal(num1, num2) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(num1, num2), lcm(num1, num2)];
}
function solution(list) {
  let [a, b, c, d] = [list[0][0], list[0][1], list[1][0], list[1][1]];
  let [gcd, lcm] = cal(b, d);
  let up = a * (lcm / b) + c * (lcm / d);
  let index = 0;
  while (true) {
    let [cd, cm] = cal(lcm, up);
    if (cd === 1) {
      break;
    }
    lcm = lcm / cd;
    up = up / cd;
  }

  console.log(`${up} ${lcm}`);
}
