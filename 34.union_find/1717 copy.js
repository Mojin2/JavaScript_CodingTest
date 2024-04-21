let dir = __dirname + "/1717.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let answer = [];
let [N, M] = input.shift().split(" ").map(Number);
let parent = Array(N + 1).fill(-1);

for (let i = 0; i < input.length; i++) {
  let [option, a, b] = input[i].split(" ").map(Number);

  if (option === 0) {
    union(a, b);
  } else {
    if (find(a) === find(b)) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}

function union(x, y) {
  x = find(x);
  y = find(y);
  if (x != y) {
    parent[x] = y;
  }
}

function find(x) {
  if (parent[x] < 0) return x;
  parent[x] = find(parent[x]);
  return parent[x];
}
