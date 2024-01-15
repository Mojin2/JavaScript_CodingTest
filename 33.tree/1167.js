let dir = __dirname + "/1167.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// valuables & graph setting
let V = +input.shift();
let arr = input.map((el) => el.split(" ").map(Number));
let graph = Array.from(Array(V + 1), () => []);

for (let i = 0; i < arr.length; i++) {
  let from = arr[i][0];
  for (let j = 1; j < arr[i].length; j += 2) {
    if (arr[i][j] === -1) break;
    let [to, weight] = [arr[i][j], arr[i][j + 1]];
    graph[from].push([to, weight]);
  }
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
