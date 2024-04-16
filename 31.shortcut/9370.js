const { cos } = require("mathjs");

let dir = __dirname + "/9370.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let Z = +input.shift();
for (let zz = 0; zz < Z; zz++) {
  answer = [];
  let [v, e, t] = input.shift().split(" ").map(Number);
  let [start, g, h] = input.shift().split(" ").map(Number);
  let arr = input.slice(0, e);
  let tmp = [g, h].sort();
  // 그래프 생성
  let targets = input.slice(e, e + t).map(Number);
  let graph = Array.from(Array(v + 1), () => []);
  arr.forEach((el) => {
    let [from, to, weight] = el.split(" ").map(Number);
    graph[from].push([to, weight]);
    graph[to].push([from, weight]);
  });

  // 벨만포드
  let cost = Array.from(Array(v + 1), () => Array(v + 1).fill(Infinity));

  // 자기자신 루트 0
  for (let i = 1; i <= v; i++) {
    for (let j = 1; j <= v; j++) {
      if (i === j) cost[i][j] = 0;
    }
  }

  // 인접한 루트
  arr.forEach((el) => {
    let [from, to, weight] = el.split(" ").map(Number);
    if (cost[from][to] > cost[from][from] + weight) {
      cost[from][to] = cost[from][from] + weight;
    }
    if (cost[to][from] > cost[to][to] + weight) {
      cost[to][from] = cost[to][to] + weight;
    }
  });

  // mid - start - end
  for (let mid = 1; mid <= v; mid++) {
    for (let start = 1; start <= v; start++) {
      for (let end = 1; end <= v; end++) {
        if (cost[start][end] > cost[start][mid] + cost[mid][end]) {
          cost[start][end] = cost[start][mid] + cost[mid][end];
        }
      }
    }
  }
  for (let target of targets) {
    if (
      cost[start][target] ===
      cost[start][tmp[0]] + cost[tmp[0]][tmp[1]] + cost[tmp[1]][target]
    ) {
      answer.push(target);
    }
  }
  console.log(answer.sort().join(" "));

  input = input.slice(e + t);
}
