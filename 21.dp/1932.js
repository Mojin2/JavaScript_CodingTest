const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1932.txt"; // 제출시 삭제

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
//[red,green,blue]

function solution(list) {
  const n = list[0][0];
  let arr = list.slice(1);
  let dp = [];
  for (let i = 0; i < arr.length; i++) {
    let tmp = [];
    for (let j = 0; j < arr[i].length; j++) {
      tmp.push(undefined);
    }
    dp.push(tmp);
  }
  dp[0][0] = arr[0][0];
  function triangle(arr) {
    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (j === 0) {
          dp[i][j] = dp[i - 1][0] + arr[i][j];
        } else if (j === arr[i].length - 1) {
          dp[i][j] = dp[i - 1][dp[i - 1].length - 1] + arr[i][j];
        } else {
          dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + arr[i][j];
        }
      }
    }
  }
  triangle(arr);
  console.log(Math.max(...dp[dp.length - 1]));
}
