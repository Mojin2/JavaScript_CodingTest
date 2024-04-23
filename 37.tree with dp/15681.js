let dir = __dirname + "/15681.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let [N, R, Q] = input.shift().split(" ").map(Number);
let arr = input.slice(0, N - 1).map((el) => el.split(" ").map(Number));
let query = input.slice(N - 1).map(Number);

let tree = Array.from(Array(N + 1), () => []);
let visited = Array(N + 1).fill(false);
let dp = Array(N + 1).fill(0);

arr.forEach((el) => {
  let [from, to] = el;
  tree[from].push(to);
  tree[to].push(from);
});

function DFS(node) {
  if (visited[node]) return dp[node];
  visited[node] = true;
  dp[node] += 1;

  for (let next of tree[node]) {
    if (visited[next]) continue;
    dp[node] += DFS(next);
  }
  return dp[node];
}

DFS(R);

let answer = [];
query.forEach((el) => {
  answer.push(dp[el]);
});

console.log(answer.join("\n"));
