let dir = __dirname + "/1976.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let N = +input.shift();
let M = +input.shift();
let arr = [];
for (let i = 0; i < N; i++) {
  arr.push(input.shift().split(" ").map(Number));
}
let tourlist = input.shift().split(" ").map(Number);

let graph = Array.from(Array(N + 1), () => []);
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === 1) graph[i + 1].push(j + 1);
  }
}
answer = [tourlist[0]];
function BFS(start, end) {
  let queue = [start];
  let idx = 1;
  let visited = Array(N + 1).fill(0);
  visited[0] = 1;

  while (queue.length > 0) {
    let cur = queue.shift();
    if (cur === end) return true;

    for (let next of graph[cur]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
  return false;
}

for (let i = 0; i < tourlist.length - 1; i++) {
  let start = tourlist[i];
  let end = tourlist[i + 1];
  if (BFS(start, end)) {
    if (i === tourlist.length - 2) {
      console.log("YES");
    } else {
      continue;
    }
  } else {
    console.log("NO");
    break;
  }
}
