const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2606.txt"; // 제출시 삭제

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
  const [[N], [M], ...arr] = list;
  let graph = Array.from(new Array(N + 1), () => []);
  arr.forEach((el) => {
    const [from, to] = el;
    graph[from].push(to);
    graph[to].push(from);
  });
  let queue = [];
  let visited = new Array(N + 1).fill(0);
  queue.push(1);
  visited[1] = 1;
  while (queue.length !== 0) {
    let cur = queue.shift();

    for (node of graph[cur]) {
      if (!visited[node]) {
        queue.push(node);
        visited[node] = 1;
      }
    }
  }
  console.log(visited.filter((el) => el === 1).length - 1);
}
