let dir = __dirname + "/4803.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");
let stage = 1;
for (let k = 0; k < input.length; k++) {
  let [v, e] = input[k].split(" ").map(Number);
  if (v === 0 && e === 0) break;
  let graph = Array.from(Array(v + 1), () => []);
  for (let i = k + 1; i < k + 1 + e; i++) {
    let [from, to] = input[i].split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }
  visited = Array(v + 1).fill(false);
  visited[0] = true;
  let count = 0;
  for (let i = 1; i < visited.length; i++) {
    if (!visited[i]) {
      let hasCycle = BFS(graph, i, visited);
      if (!hasCycle) count++;
    }
  }
  if (count === 0) console.log(`Case ${stage}: No trees.`);
  else if (count === 1) console.log(`Case ${stage}: There is one tree.`);
  else console.log(`Case ${stage}: A forest of ${count} trees.`);

  k += e;
  stage++;
}

function BFS(graph, start, visited) {
  let vertex = 1;
  let edges = [];
  let queue = [start];
  visited[start] = true;

  while (queue.length > 0) {
    let cur = queue.shift();
    for (let next of graph[cur]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
        vertex++;
      }
      edges.push([cur, next].sort((a, b) => a - b));
    }
  }
  edges = edges.map((el) => el.join(" "));
  let setEdges = new Set(edges);
  let hasCycle = false;
  vertex - setEdges.size === 1 ? (hasCycle = false) : (hasCycle = true);
  return hasCycle;
}
