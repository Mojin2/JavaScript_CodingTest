let dir = __dirname + "/12852.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");
N = +input[0];

let numbers = Array(N + 1).fill(0);
let visited = Array(N + 1).fill(false);
visited[0] = true;
let queue = [];
function BFS(start) {
  queue.push([start, 0, [start]]);
  visited[start] = true;

  while (queue.length > 0) {
    let [cur, time, move] = queue.shift();
    if (cur === 1) {
      console.log(time);
      console.log(move.join(" "));
      return;
    }

    tmp = [];
    if (cur % 3 === 0) tmp.push(cur / 3);
    if (cur % 2 === 0) tmp.push(cur / 2);
    tmp.push(cur - 1);

    for (let next of tmp) {
      if (!visited[next]) {
        queue.push([next, time + 1, [...move, next]]);
        visited[next] = 1;
      }
    }
  }
}
BFS(N);
// 연산의 종류
// X / 3
// X / 2
// X - 1
