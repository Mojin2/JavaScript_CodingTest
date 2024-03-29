let dir = __dirname + "/1717.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let answer = [];
let [N, M] = input.shift().split(" ").map(Number);
let parents = Array(N + 1).fill(-1);
for (let i = 0; i < input.length; i++) {
  let [option, a, b] = input[i].split(" ").map(Number);
  if (option === 0) union(a, b);
  else answer.push(find(a) === find(b) ? "YES" : "NO");
}

function find(x) {
  if (parents[x] < 0) return x;
  parents[x] = find(parents[x]);
  return parents[x];
}

function union(x, y) {
  x = find(x);
  y = find(y);
  if (x != y) {
    parents[x] = y;
  }
}

console.log(answer.join("\n"));
