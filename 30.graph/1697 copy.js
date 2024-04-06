let dir = __dirname + "/1697.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

let visited = Array(K + 1).fill(0);
let queue = [];
queue.push([N, 0]);
visited[N] = 1;

while (queue.length > 0) {
  let [cur, time] = queue.shift();
  if (cur === K) {
    console.log(time);
    return;
  }
  let tmp = [
    [cur - 1, time],
    [cur + 1, time],
    [2 * cur, time],
  ];
  for ([next, time] of tmp) {
    if (!visited[next]) {
      visited[next] = 1;
      queue.push([next, time + 1]);
    }
  }
}
