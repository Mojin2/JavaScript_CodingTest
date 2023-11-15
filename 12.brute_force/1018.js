const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1018.txt"; // 제출시 삭제

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
    list.push(val.split(" "));
  });
  solution(list);
  process.exit();
});
function solution(list) {
  let [N, M] = list[0].map((el) => Number(el));
  list.shift();
  list = list.reduce((acc, cur) => acc.concat(cur));
  // case1
  let W_start = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
  ];
  // case2
  let B_start = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
  ];
  // 8 X 8 form transition
  let arr = [];
  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      let tmp = [];
      for (let a = i; a < i + 8; a++) {
        let str = "";
        for (let b = j; b < j + 8; b++) {
          str += list[a][b];
        }
        tmp.push(str);
      }
      arr.push(tmp);
    }
  }
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    //case1 W start
    let W_count = 0;
    for (let a = 0; a < arr[i].length; a++) {
      for (let b = 0; b < arr[i][a].length; b++) {
        if (arr[i][a][b] !== W_start[a][b]) {
          W_count += 1;
        }
      }
    }
    //case2 B start
    let B_count = 0;
    for (let a = 0; a < arr[i].length; a++) {
      for (let b = 0; b < arr[i][a].length; b++) {
        if (arr[i][a][b] !== B_start[a][b]) {
          B_count += 1;
        }
      }
    }
    answer.push(W_count, B_count);
  }
  console.log(Math.min(...answer));
}
