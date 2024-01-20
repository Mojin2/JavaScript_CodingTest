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

  let ans = 0;
  let visited = Array(graph.length).fill(0);

  for (let st = 1; st <= n; st++) {
    if (visited[st] === 0) {
      if (BFS(graph, st, visited)) ans++;
    }
  }
  if (ans > 1) {
    console.log(`Case ${count}: A forest of ${ans} trees.`);
  }
  if (ans === 1) {
    console.log(`Case ${count}: There is one tree.`);
  }
  if (ans === 0) {
    console.log(`Case ${count}: No trees.`);
  }
  count++;
  i = i + m;
}
function BFS(graph, start, visited) {
  let queue = [];
  queue.push(start);
  visited[start] = 1;
  let isTree = true;

  while (queue.length !== 0) {
    let cur = queue.shift();

    for (let next of graph[cur]) {
      if (visited[next] !== 0 && visited[next] !== visited[cur] - 1) {
        isTree = false;
      }
      if (visited[next] !== 0) continue;
      visited[next] = visited[cur] + 1;
      queue.push(next);
    }
  }

  return isTree;
}

// function isTree(graph, count) {
//   let trees = 0;
//   let visited = Array(graph.length).fill(false);
//   visited[0] = true;
//   let check = true;
//   function DFS(node) {
//     visited[node] = true;
//     let tmp = 0;
//     for (let i = 0; i < graph[node].length; i++) {
//       let next = graph[node][i];
//       if (!visited[next]) {
//         DFS(next);
//       } else {
//         tmp++;
//       }
//     }
//     if (tmp !== 0 && tmp === graph[node].length) {
//       check = false;
//     }
//   }
//   while (visited.includes(false)) {
//     check = true;
//     let start = visited.indexOf(false);
//     DFS(start);
//     if (check !== false) trees++;
//   }
//   console.log(`Case ${count}: ${trees}`);
// }
