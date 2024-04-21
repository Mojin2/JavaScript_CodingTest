let dir = __dirname + "/9372.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let T = +input.shift();

for (let i = 0; i < input.length; i++) {
  let [N, M] = input[i].split(" ").map(Number);
  let arr = input
    .slice(i + 1, M + i + 1)
    .map((el) => el.split(" ").map(Number));
  let parents = Array(N + 1)
    .fill(0)
    .map((el, idx) => idx);
  let count = 0;
  arr.forEach((el) => {
    let [from, to] = el;
    if (!isSame(parents, from, to)) {
      count++;
      union(parents, from, to);
    }
  });
  console.log(count);
  i = i + M;
}

function find(parents, x) {
  if (parents[x] === x) return x;
  return (parents[x] = find(parents, parents[x]));
}

function union(parents, x, y) {
  let parentX = find(parents, x);
  let parentY = find(parents, y);

  if (parentX !== parentY) {
    if (x < y) {
      parents[y] = x;
    } else {
      parents[x] = y;
    }
  }
}

function isSame(parents, x, y) {
  if (find(parents, x) === find(parents, y)) return true;
  else return false;
}
