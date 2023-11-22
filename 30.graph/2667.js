const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2667.txt"; // 제출시 삭제

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
  let [[N], ...arr] = list;
  N = Number(N);
  arr = arr.reduce((acc, cur) => acc.concat(cur));
  board = arr.map((el) => el.split("").map(Number));
  let [count, answer] = BFS(board, N);
  console.log(count);
  console.log(answer.sort((a, b) => a - b).join("\n"));
}

function BFS(board, N) {
  let visited = Array.from(Array(N), () => Array(N).fill(0));
  let count = 0;
  let answer = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1 && !visited[i][j]) {
        count++;
        let ans = 1;
        let queue = [];
        queue.push([i, j]);
        visited[i][j] = 1;
        while (queue.length !== 0) {
          let [x, y] = queue.shift();
          let tmp = [
            [x - 1, y],
            [x, y - 1],
            [x + 1, y],
            [x, y + 1],
          ];
          for (next of tmp) {
            let [x, y] = next;
            if (x >= 0 && x < N && y >= 0 && y < N) {
              if (!visited[x][y] && board[x][y] === 1) {
                queue.push([x, y]);
                visited[x][y] = 1;
                ans++;
              }
            }
          }
        }
        answer.push(ans);
      }
    }
  }
  return [count, answer];
}
