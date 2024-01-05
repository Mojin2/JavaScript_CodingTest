let dir = __dirname + "/2206.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let [options, ...board] = input;
let [N, M] = options.split(" ").map(Number);
board = board.map((el) => el.split("").map(Number));
let visited = Array.from(Array(N), () =>
  Array.from(Array(M), () => Array(2).fill(false))
);
let queue = [[0, 0, 1, 1]];
visited[0][0][0] = true;
while (queue.length !== 0) {
  let [x, y, chance, time] = queue.shift();
  if (x === N - 1 && y === M - 1) {
    console.log(time);
    return;
  }
  let tmp = [
    [x + 1, y],
    [x - 1, y],
    [x, y + 1],
    [x, y - 1],
  ];

  for (let next of tmp) {
    let [a, b] = next;
    if (a >= 0 && a < N && b >= 0 && b < M) {
      if (!visited[a][b][0] && board[a][b] === 0) {
        visited[a][b][0] = true;
        queue.push([a, b, chance, time + 1]);
      }
      if (!visited[a][b][1] && board[a][b] === 1 && chance > 0) {
        if (
          a === x + 1 &&
          b === y &&
          a + 1 >= 0 &&
          a + 1 < N &&
          board[a + 1][b] === 0
        ) {
          visited[a][b][1] = true;
          visited[a + 1][b][0] = true;
          queue.push([a + 1, b, chance - 1, time + 2]);
        } else if (
          a === x - 1 &&
          b === y &&
          a - 1 >= 0 &&
          a - 1 < N &&
          board[a - 1][b] === 0
        ) {
          visited[a][b][1] = true;
          visited[a - 1][b][0] = true;
          queue.push([a - 1, b, chance - 1, time + 2]);
        } else if (
          a === x &&
          b === y + 1 &&
          b + 1 >= 0 &&
          b + 1 < M &&
          board[a][b + 1] === 0
        ) {
          visited[a][b][1] = true;
          visited[a][b + 1][0] = true;
          queue.push([a, b + 1, chance - 1, time + 2]);
        } else if (
          a === x &&
          b === y - 1 &&
          b - 1 >= 0 &&
          b - 1 < M &&
          board[a][b - 1] === 0
        ) {
          visited[a][b][1] = true;
          visited[a][b - 1][0] = true;
          queue.push([a, b - 1, chance - 1, time + 2]);
        }
      }
    }
  }
}
console.log(-1);

[
  [true, true, true, true, true, true, true, true],
  [true, true, true, false, true, true, true, true],
  [true, true, true, false, true, true, true, true],
  [true, true, true, false, true, true, false, false],
  [true, true, true, false, true, true, false, false],
];
