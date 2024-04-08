let dir = __dirname + "/11404.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const line = require("fs").readFileSync(path, "utf-8");
let input = line.trim().split("\n");

const V = +input.shift();
const E = +input.shift();
input = input.map((el) => el.split(" ").map(Number));

// 모든 쌍의 비용을 체크, 초기에는 Infinity로 초기화
let cost = Array.from(Array(V + 1), () => Array(V + 1).fill(Infinity));
// 자기 자신으로 가는 비용은 0
for (let i = 1; i <= V; i++) {
  cost[i][i] = 0;
}

// 초기 상태의 정점에서 인접한 노드만 확인
input.forEach((el) => {
  let [from, to, c] = el;
  if (cost[from][to] > cost[from][from] + c) {
    cost[from][to] = cost[from][from] + c;
  }
});

for (let mid = 1; mid <= V; mid++) {
  // 거쳐지는 지점
  for (let start = 1; start <= V; start++) {
    // 시작지점
    for (let end = 1; end <= V; end++) {
      // 도착지점
      if (cost[start][mid] + cost[mid][end] < cost[start][end]) {
        cost[start][end] = cost[start][mid] + cost[mid][end];
      }
    }
  }
}

// 못가는 경로 0으로 체크
for (let start = 1; start <= V; start++) {
  for (let end = 1; end <= V; end++) {
    if (cost[start][end] === Infinity) {
      cost[start][end] = 0;
    }
  }
}
cost = cost.slice(1).map((el) => el.slice(1));
console.log(cost.map((arr) => arr.join(" ")).join("\n"));
