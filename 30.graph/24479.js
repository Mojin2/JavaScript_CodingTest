const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/24479.txt"; // 제출시 삭제

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
  let [[N, M, startNode], ...arr] = list;
  // Graph 생성
  arr = arr.sort((a, b) => a[1] - b[1]);
  let graph = {};
  for (let i = 0; i < M; i++) {
    if (!graph[arr[i][0]]) {
      graph[arr[i][0]] = [arr[i][1]];
    } else {
      graph[arr[i][0]].push(arr[i][1]);
    }
  }
  // DFS
  let count = 1;
  let visited = new Array(N + 1);
  let answer = new Array(N).fill(0);
  function DFS(startNode) {
    visited[startNode] = true;
    answer[startNode - 1] = count++;
    if (graph[startNode] === undefined) return;
    const nodes = [...graph[startNode]];
    for (node of nodes) {
      if (!visited[node]) {
        DFS(node);
      }
    }
  }
  DFS(startNode);
  console.log(answer.join("\n"));
}
