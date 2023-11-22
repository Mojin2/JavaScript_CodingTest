const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/24444.txt"; // 제출시 삭제

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
  let [[N, M, R], ...arr] = list;
  // Graph 생성
  let graph = Array.from(Array(N + 1), () => []);
  for (tmp of arr) {
    let [a, b] = tmp;
    graph[a].push(b);
    graph[b].push(a);
  }
  graph.forEach((el) => el.sort((a, b) => a - b));
  // BFS
  let queue = [];
  let count = 1;
  let visited = Array(N + 1);
  visited[R] = true;
  let answer = Array(N).fill(0);
  answer[R - 1] = count++;
  queue.push(R);
  while (queue.length !== 0) {
    let cur = queue.shift();

    for (const next of graph[cur]) {
      if (!visited[next]) {
        queue.push(next);
        visited[next] = true;
        answer[next - 1] = count++;
      }
    }
  }
  console.log(answer.join("\n"));
}
