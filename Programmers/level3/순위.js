function solution(n, results) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => []);
  results.forEach((result) => {
    let [from, to] = result;
    graph[from].push([to, -1]);
    graph[to].push([from, 1]);
  });
  for (let i = 1; i <= n; i++) {
    if (BFS(i, graph)) answer++;
  }
  return answer;
}

function BFS(start, graph) {
  let visited = Array(graph.length).fill(0);
  let queue = [[start, 0]];
  visited[0] = 1;
  visited[start] = 1;
  while (queue.length > 0) {
    let [cur, dir] = queue.shift();

    for (let p of graph[cur]) {
      let [next, nextDir] = p;
      if (visited[next]) continue;
      if (dir === 0) {
        visited[next] = 1;
        queue.push([next, nextDir]);
      } else {
        if (dir !== nextDir) continue;
        visited[next] = 1;
        queue.push([next, nextDir]);
      }
    }
  }
  return visited.every((v) => v === 1);
}

let n = 5;
let results = [
  [4, 3],
  [4, 2],
  [3, 2],
  [1, 2],
  [2, 5],
];

console.log(solution(n, results));
