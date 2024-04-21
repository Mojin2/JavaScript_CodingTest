let dir = __dirname + "/1197.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let [V, E] = input.shift().split(" ").map(Number);
let costs = input.map((el) => el.split(" ").map(Number));
costs.sort((a, b) => a[2] - b[2]);

let parents = Array(V + 1)
  .fill(0)
  .map((el, index) => index);
let answer = 0;
for (let cost of costs) {
  let [x, y, c] = cost;
  if (!isSame(x, y)) {
    union(x, y);
    answer += c;
  }
}

console.log(answer);

function find(x) {
  if (parents[x] === x) return x;
  return (parents[x] = find(parents[x]));
}

function union(x, y) {
  x = find(x);
  y = find(y);
  if (x != y) {
    if (x < y) {
      parents[y] = x;
    } else {
      parents[x] = y;
    }
  }
}

function isSame(x, y) {
  if (find(x) === find(y)) return true;
  else return false;
}
