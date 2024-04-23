let dir = __dirname + "/2533.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let n = +input.shift();
let graph = Array.from(Array(n + 1), () => []);
let dp = Array.from(Array(n + 1), () => Array(2).fill(0));

input.forEach((el) => {
  let [from, to] = el.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});

// 접근 방법
// 1. x를 선택하지 않으면 x와 연결된 모든 노드는 반드시 선택
// 2. x를 선택하면 x와 연결된 노드는 선택해도 되고 안해도 됨
// dp 배열
// 해당 노드까지 고려했을때 해당 노드 아래로 모두 얼리어답터가 되기 위해 선택한 최소한의 노드 수
// dp[x][0] : 해당 노드를 선택하지 않았을때 최소한의 노드 수
// dp[x][1] : 해당 노드를 선택했을때 최소한의 노드 수

let visited = Array(n + 1).fill(0);
visited[0] = 1;
function DFS(node) {
  visited[node] = 1;
  dp[node][0] = 0;
  dp[node][1] = 1;

  for (let next of graph[node]) {
    if (visited[next]) continue;

    DFS(next);
    dp[node][0] += dp[next][1];
    dp[node][1] += Math.min(dp[next][0], dp[next][1]);
  }
}

DFS(1);
console.log(Math.min(...dp[1]));
