const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1992.txt"; // 제출시 삭제

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
let answer = "";
function divide(board, n) {
  let con = board.reduce((acc, cur) => acc.concat(cur));
  let set = new Set(con);
  if (set.size === 1) {
    if (set.has(1)) answer += "1";
    if (set.has(0)) answer += "0";
    return 1;
  }
  let standard = n / 2; // 4
  let one = [];
  let two = [];
  let three = [];
  let four = [];
  for (let i = 0; i < board.length; i++) {
    let tmpone = [];
    let tmptwo = [];
    let tmpthree = [];
    let tmpfour = [];
    for (let j = 0; j < board[i].length; j++) {
      if (i < standard && j < standard) {
        tmpone.push(board[i][j]);
      } else if (i < standard && j >= standard) {
        tmptwo.push(board[i][j]);
      } else if (i >= standard && j < standard) {
        tmpthree.push(board[i][j]);
      } else if (i >= standard && j >= standard) {
        tmpfour.push(board[i][j]);
      }
    }
    if (tmpone.length !== 0) one.push(tmpone);
    if (tmptwo.length !== 0) two.push(tmptwo);
    if (tmpthree.length !== 0) three.push(tmpthree);
    if (tmpfour.length !== 0) four.push(tmpfour);
  }
  answer += "(";
  divide(one, standard);
  divide(two, standard);
  divide(three, standard);
  divide(four, standard);
  answer += ")";
}
function solution(list) {
  const n = Number(list[0]);
  let board = list.slice(1);
  board = board.map((el) => el.split("").map((el2) => Number(el2)));
  divide(board, n);
  console.log(answer);
}
