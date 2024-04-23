let dir = __dirname + "/2213.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let N = +input.shift();
let arr = input.shift().split(" ").map(Number);
arr.unshift(0);
let tree = Array.from(Array(N + 1), () => []);
input.forEach((el) => {
  let [from, to] = el.split(" ").map(Number);
  tree[from].push(to);
  tree[to].push(from);
});

let memo = Array.from(Array(N + 1), () => Array(2).fill(0));
let visited = Array(N + 1).fill(false);
let include = Array(N + 1).fill(false);

function DFS(node) {
  memo[node][0] = 0; // 포함하지 않으면 0
  memo[node][1] = arr[node]; // 포함하면 현재 노드의 가중치
  visited[node] = true;

  for (let next of tree[node]) {
    if (visited[next]) continue;
    DFS(next);
    memo[node][0] += Math.max(memo[next][0], memo[next][1]);
    memo[node][1] += memo[next][0];
  }
}

let paths = [];
function tracing(node, prev) {
  if (memo[node][1] > memo[node][0] && !include[prev]) {
    paths.push(node);
    include[node] = true;
  }

  for (let next of tree[node]) {
    if (next === prev) continue;
    tracing(next, node);
  }
}

visited[1] = true;
DFS(1);
console.log(memo);
tracing(1, 0);

let answer = Math.max(memo[1][0], memo[1][1]);
paths.sort((a, b) => a - b);
console.log(answer);
console.log(paths.join(" "));
