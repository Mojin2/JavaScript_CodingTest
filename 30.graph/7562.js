let dir = __dirname + "/7562.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let N = Number(input.shift());
let arr = [];
for (let i = 0; i < input.length; i += 3) {
  arr.push([
    +input[i],
    input[i + 1].split(" ").map(Number),
    input[i + 2].split(" ").map(Number),
  ]);
}
let answer = [];
arr.forEach((el) => {
  let [I, start, destination] = el;
  let visited = Array.from(Array(I + 1), () => Array(I + 1).fill(false));
  answer.push(BFS(start, destination, visited, I));
});
console.log(answer.join("\n"));
function BFS(start, destination, visited, I) {
  let [x1, y1] = start;
  let [x2, y2] = destination;
  let queue = [];
  visited[x1][y1] = true;
  queue.push([x1, y1, 0]);
  while (queue.length !== 0) {
    let [a, b, time] = queue.shift();
    if (a === x2 && b === y2) return time;
    let tmps = [
      [a + 2, b + 1],
      [a + 1, b + 2],
      [a - 2, b + 1],
      [a - 1, b + 2],
      [a - 2, b - 1],
      [a - 1, b - 2],
      [a + 1, b - 2],
      [a + 2, b - 1],
    ];
    for (let next of tmps) {
      let [c, d] = next;
      if (c >= 0 && c < I && d >= 0 && d < I) {
        if (!visited[c][d]) {
          visited[c][d] = true;
          queue.push([c, d, time + 1]);
        }
      }
    }
  }
}
