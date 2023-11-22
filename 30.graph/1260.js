const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1260.txt"; // 제출시 삭제

const readline = require("readline");
const rl = readline.createInterface({
  // input: process.stdin, // 제출시 활성화
  input: fs.createReadStream(path), // 제출시 삭제
  output: process.stdout,
});

let input = [];
let list = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.forEach((val) => {
    list.push(val.split(" ").map((el) => parseInt(el)));
  });
  solution(list);
  process.exit();
});
function solution(list) {
  let [[N, M, V], ...arr] = list;
  let graph = Array.from(new Array(N + 1), () => []);
  arr.forEach((el) => {
    const [from, to] = el;
    graph[from].push(to);
    graph[to].push(from);
  });
  graph.forEach((el) => el.sort((a, b) => a - b));
  // DFS
  let answer = [];
  let visited = new Array(N + 1).fill(0);
  function DFS(graph, startNode, N) {
    visited[startNode] = 1;
    answer.push(startNode);

    for (next of graph[startNode]) {
      if (!visited[next]) {
        DFS(graph, next, N);
      }
    }
  }
  DFS(graph, V, N);
  console.log(answer.join(" "));
  // BFS
  console.log(BFS(graph, V, N).join(" "));
}

function BFS(graph, startNode, N) {
  let queue = [];
  let visited = new Array(N + 1).fill(0);
  let answer = [];
  queue.push(startNode);
  visited[startNode] = 1;
  answer.push(startNode);

  while (queue.length !== 0) {
    let cur = queue.shift();
    for (next of graph[cur]) {
      if (!visited[next]) {
        queue.push(next);
        answer.push(next);
        visited[next] = 1;
      }
    }
  }
  return answer;
}
