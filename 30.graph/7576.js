let dir = __dirname + "/7576.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let [M, N] = input.shift().split(" ").map(Number);
input = input.map((el) => el.split(" ").map(Number));

let visited = Array.from(Array(N), () => Array(M).fill(false));
let queue = [];
let count = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 1) {
      queue.push([i, j, 0]);
      visited[i][j] = true;
      count++;
    } else if (input[i][j] === 0) {
      count++;
    }
  }
}
let idx = 0;
while (queue.length !== idx) {
  let cur = queue[idx];
  let [x, y, time] = cur;
  input[x][y] = 1;
  count--;
  if (count === 0) {
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
      if (!visited[a][b] && input[a][b] === 0) {
        visited[a][b] = true;
        queue.push([a, b, time + 1]);
      }
    }
  }
  idx++;
}
if (count !== 0) {
  console.log(-1);
}
