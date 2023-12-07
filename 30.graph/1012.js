const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1012.txt"; // 제출시 삭제

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
  const T = list[0][0];
  let arr = [];
  list.shift();
  let index = 0;
  for (let k = 0; k < T; k++) {
    const [M, N, K] = list[index];
    let tmp = [[M, N, K]];
    index++;
    for (let i = 0; i < K; i++) {
      tmp.push(list[index]);
      index++;
    }
    arr.push(tmp);
  }
  arr.forEach((v) => {
    Check(v);
  });
}
function Check(array) {
  let [M, N, K] = array[0];
  let arr = array.slice(1);
  let board = Array.from(Array(M), () => Array(N).fill(0));
  arr.forEach((el) => {
    board[el[0]][el[1]] = 1;
  });
  let visited = Array.from(Array(M), () => Array(N).fill(0));
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1 && !visited[i][j]) {
        DFS(board, i, j);
        count++;
      }
    }
  }
  console.log(count);
  function DFS(board, i, j) {
    if (board[i][j] === 1 && !visited[i][j]) {
      visited[i][j] = 1;
      let tmp = [
        [i - 1, j],
        [i + 1, j],
        [i, j - 1],
        [i, j + 1],
      ];
      for (next of tmp) {
        let [x, y] = next;
        if (x >= 0 && x < M && y >= 0 && y < N) {
          if (!visited[x][y]) {
            DFS(board, x, y);
          }
        }
      }
    }
  }
}
