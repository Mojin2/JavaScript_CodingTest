const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/14889.txt"; // 제출시 삭제

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
  const n = list[0][0];
  let member = Array(Number(n))
    .fill(0)
    .map((_, index) => index);
  let board = list.slice(1);

  let tmp = [];
  let min = Number.MAX_SAFE_INTEGER;
  function DFS(L, board) {
    if (tmp.length === n / 2) {
      let score = calScore(tmp, n, board);
      if (score < min) {
        min = score;
      }
      return;
    } else {
      for (let i = L; i < member.length; i++) {
        tmp.push(member[i]);
        DFS(i + 1, board);
        tmp.pop();
      }
    }
  }

  DFS(0, board);
  console.log(min);
  function calScore(tmp, n, board) {
    let arr = Array(Number(n))
      .fill(0)
      .map((_, index) => index);
    let set_arr = new Set(arr);
    let set_tmp = new Set(tmp);
    let set_other = new Set([...set_arr].filter((x) => !set_tmp.has(x)));
    let other = Array.from(set_other);
    let tmp_score = 0;
    let other_score = 0;
    for (let i = 0; i < tmp.length; i++) {
      for (let j = 0; j < tmp.length; j++) {
        if (i === j) continue;
        else {
          tmp_score += board[tmp[i]][tmp[j]];
          other_score += board[other[i]][other[j]];
        }
      }
    }
    return Math.abs(tmp_score - other_score);
  }
}
//[1,2,3,4]
// [ 0, 1 ]
// [ 0, 2 ]
// [ 0, 3 ]
// [ 1, 2 ]
// [ 1, 3 ]
// [ 2, 3 ]
