let dir = __dirname + "/11725.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let N = +input.shift();
let arr = input.map((el) => el.split(" ").map(Number));
let tree = Array.from(Array(N + 1), () => []);

for (let i = 0; i < arr.length; i++) {
  let [from, to] = arr[i];
  tree[from].push(to);
  tree[to].push(from);
}
// console.log(tree);

let visited = Array(N + 1).fill(false);
let queue = [];
let answer = Array(N + 1).fill(0);
queue.push(1);
while (queue.length !== 0) {
  let cur = queue.shift();

  for (let next of tree[cur]) {
    if (!visited[next]) {
      visited[next] = true;
      answer[next] = cur;
      queue.push(next);
    }
  }
}

answer = answer.slice(2);
console.log(answer.join("\n"));
