let dir = __dirname + "/4803.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

// create graph
let count = 1;
for (let i = 0; i < input.length; i++) {
  let [n, m] = input[i].split(" ").map(Number);
  if (n === 0 && m === 0) break;
  let graph = Array.from(Array(n + 1), () => []);
  for (let j = i + 1; j < i + 1 + m; j++) {
    let [from, to] = input[j].split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }
  console.log(graph);
  isTree(graph, count);
  count++;
  i = i + m;
}

function isTree(graph, count) {
  let trees = 0;
  let visited = Array(graph.length).fill(false);
  visited[0] = true;

  function DFS(node) {
    visited[node] = true;
    let tmp = 0;
    for (let i = 0; i < graph[node].length; i++) {
      let next = graph[node][i];
      if (!visited[next]) {
        DFS(next);
      } else {
        tmp++;
      }
    }
    if (tmp !== 0 && tmp === graph[node].length) {
      return false;
    } else {
      return true;
    }
  }
  while (visited.includes(false)) {
    let start = visited.indexOf(false);
    console.log(DFS(start));
  }
}
