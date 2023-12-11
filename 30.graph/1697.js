let dir = __dirname + "/1697.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

let visited = Array(K + 1).fill(false);
function BFS(start) {
  let queue = [];
  visited[start] = true;
  queue.push([start, 0]);
  while (queue.length !== 0) {
    let [cur, time] = queue.shift();
    if (cur === K) return time;
    let tmps = [cur - 1, cur + 1, 2 * cur];
    for (let next of tmps) {
      if (!visited[next] && next >= 0 && next <= K) {
        queue.push([next, time + 1]);
        visited[next] = true;
      }
    }
  }
}

console.log(BFS(N));
