let dir = __dirname + "/1956.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let [V, E] = input.shift().split(" ").map(Number);
input = input.map((el) => el.split(" ").map(Number));

// 플로이드 워셜을 이용해서 모든 쌍의 최단 경로 확인
let cost = Array.from(Array(V + 1), () => Array(V + 1).fill(Infinity));

// 본인에서 본인가는 경로
for (let i = 1; i < cost.length; i++) {
  for (let j = 1; j < cost[i].length; j++) {
    if (i === j) cost[i][j] = 0;
  }
}
// Input 정보에서의 경로
input.forEach((el) => {
  let [from, to, weight] = el;
  if (cost[from][to] > cost[from][from] + weight) {
    cost[from][to] = cost[from][from] + weight;
  }
});
// mid - start - end 경로
for (let mid = 1; mid <= V; mid++) {
  for (let start = 1; start <= V; start++) {
    for (let end = 1; end <= V; end++) {
      if (cost[start][end] > cost[start][mid] + cost[mid][end]) {
        cost[start][end] = cost[start][mid] + cost[mid][end];
      }
    }
  }
}
let answer = Number.MAX_SAFE_INTEGER;
for (let start = 1; start <= V; start++) {
  for (let end = 1; end <= V; end++) {
    if (start === end) continue;
    if (cost[start][end] != Infinity && cost[end][start] != Infinity) {
      answer = Math.min(answer, cost[start][end] + cost[end][start]);
    }
  }
}
answer === Number.MAX_SAFE_INTEGER ? console.log(-1) : console.log(answer);
