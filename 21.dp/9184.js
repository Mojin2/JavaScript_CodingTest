const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/9184.txt"; // 제출시 삭제

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
let memo = {};
let count = 0;
function w(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    count++;
    return 1;
  }
  if (a > 20 || b > 20 || c > 20) {
    count++;
    return w(20, 20, 20);
  }
  if (memo[a][b][c]) {
    return memo[a][b][c];
  }
  if (a < b && b < c) {
    count++;
    memo[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
  } else {
    count++;
    memo[a][b][c] =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);
  }
  return memo[a][b][c];
}
function solution(list) {
  list.pop();
  for (let i = 0; i <= 20; i++) {
    memo[i] = [];
    for (let j = 0; j <= 20; j++) {
      memo[i][j] = [];
      for (let k = 0; k <= 20; k++) {
        memo[i][j][k] = null;
      }
    }
  }
  list.forEach((el) => {
    let [a, b, c] = el;
    console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
  });
  //   let obj = { "1 1 1": 1 };
  //   console.log(obj["1 1 1"]);
}
