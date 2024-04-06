let dir = __dirname + "/1260.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);
let arr = input.map((el) => el.split(" ").map(Number));

let graph = Array.from(Array(N + 1), () => []);
arr.forEach((el) => {
  let [from, to] = el;
  graph[from].push(to);
  graph[to].push(from);
});
graph.forEach((el) => {
  el.sort((a, b) => a - b);
});

let visitedDFS = Array(N + 1).fill(0);
visitedDFS[0] = 1;
let result = [];
function DFS(start) {
  visitedDFS[start] = 1;
  result.push(start);
  for (next of graph[start]) {
    if (!visitedDFS[next]) {
      DFS(next);
    }
  }
}
DFS(V);

let visitedBFS = Array(N + 1).fill(0);
visitedBFS[0] = 1;
let result2 = [];
let queue = [V];
visitedBFS[V] = 1;

while (queue.length > 0) {
  let cur = queue.shift();
  result2.push(cur);
  for (next of graph[cur]) {
    if (!visitedBFS[next]) {
      queue.push(next);
      visitedBFS[next] = 1;
    }
  }
}

console.log(`DFS : ${result}`);
console.log(`BFS : ${result2}`);
