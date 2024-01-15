let dir = __dirname + "/1967.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let V = +input.shift();
let graph = Array.from(Array(V + 1), () => []);
for (let option of input) {
  let [from, to, weight] = option.split(" ").map(Number);
  graph[from].push([to, weight]);
  graph[to].push([from, weight]);
}

// DFS
function DFS(cur, visited, cost) {
  visited[cur] = true;

  for (let tmp of graph[cur]) {
    let [next, weight] = tmp;
    if (!visited[next]) {
      cost[next] = cost[cur] + weight;
      DFS(next, visited, cost);
    }
  }
}

// 각 노드를 스타트노드로 거리를 계산
let visited1 = Array(V + 1).fill(false);
let cost1 = Array(V + 1).fill(0);
DFS(1, visited1, cost1);
let answer1 = Math.max(...cost1);
let y = cost1.indexOf(answer1);

let visited2 = Array(V + 1).fill(false);
let cost2 = Array(V + 1).fill(0);
DFS(y, visited2, cost2);
let answer2 = Math.max(...cost2);
console.log(answer2);
