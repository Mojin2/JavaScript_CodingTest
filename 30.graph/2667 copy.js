let dir = __dirname + "/2667.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = +input.shift();
const board = input.map((el) => el.split("").map(Number));

let visited = Array.from(Array(N), () => Array(N).fill(0));

let result = [];
function DFS(x, y) {
  visited[x][y] = 1;
  result.push([x, y]);
  let tmp = [
    [x + 1, y],
    [x - 1, y],
    [x, y + 1],
    [x, y - 1],
  ].filter((el) => el[0] >= 0 && el[1] >= 0 && el[0] < N && el[1] < N);

  for ([x, y] of tmp) {
    if (!visited[x][y] && board[x][y]) {
      DFS(x, y);
    }
  }
}

let totalCount = 0;
let answer = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 1 && visited[i][j] === 0) {
      totalCount++;
      DFS(i, j);
      if (answer.length >= 1) {
        answer.push(result.length - answer.reduce((acc, cur) => acc + cur));
      } else {
        answer.push(result.length);
      }
    }
  }
}
console.log(totalCount);
console.log(answer.sort((a, b) => a - b).join("\n"));
