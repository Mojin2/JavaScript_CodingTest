const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2178.txt"; // 제출시 삭제

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
  let [[N, M], ...board] = list;
  board = board
    .reduce((acc, cur) => acc.concat(cur))
    .map((el) => el.toString())
    .map((el) => el.split("").map(Number));
  let visited = Array.from(Array(Number(N)), () => Array(Number(M)).fill(0));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1 && !visited[i][j]) {
        let queue = [[i, j]];
        visited[i][j] = 1;

        while (queue.length !== 0) {
          let [x, y] = queue.shift();
          let tmp = [
            [x, y - 1],
            [x, y + 1],
            [x - 1, y],
            [x + 1, y],
          ];
          for (next of tmp) {
            let [a, b] = next;
            if (a >= 0 && a < N && b >= 0 && b < M) {
              if (!visited[a][b] && board[a][b] === 1) {
                queue.push([a, b]);
                visited[a][b] = visited[x][y] + 1;
              }
            }
          }
        }
        console.log(visited[N - 1][M - 1]);
      }
    }
  }
}
