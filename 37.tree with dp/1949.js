let dir = __dirname + "/1949.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let N = +input.shift();
let w = input.shift().split(" ").map(Number);
w.unshift(0);
let graph = Array.from(Array(N + 1), () => []);
let dp = Array.from(Array(N + 1), () => Array(2).fill(0));
input.forEach((el) => {
  let [from, to] = el.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});

let visited = Array(N + 1).fill(0);
visited[0] = 1;
function DFS(node) {
  visited[node] = 1;
  dp[node][0] = 0;
  dp[node][1] = w[node];

  for (let next of graph[node]) {
    if (visited[next]) continue;

    DFS(next);
    dp[node][0] += Math.max(dp[next][0], dp[next][1]);
    dp[node][1] += dp[next][0];
  }
}
DFS(1);
console.log(Math.max(...dp[1]));

// 접근 방식
// DFS로 가장 리프노드부터 탐색하면서 dp를 업데이트
// dp[i][0] : i노드가 우수마을이 아니면서 현재까지 우수 마을로 선정된 마을 주민 수의 최대 합
// dp[i][1] :  i노드가 우수마을에 포함되면서 현재까지 우수 마을로 선정된 마을 주민 수의 최대 합
// 1. 자식노드가 우수마을이라면 현재 노드는 우수마을 X
// 2. 자식노드가 우수마을이 아니라면 현재 노드는
