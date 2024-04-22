let dir = __dirname + "/1774.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let arr = input.slice(0, N).map((el) => el.split(" ").map(Number));
let linked = input.slice(N).map((el) => el.split(" ").map(Number));

let queue = [];
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    queue.push([i, j, distanceFromOther(arr[i], arr[j])]);
  }
}
let parents = Array(N + 1)
  .fill(0)
  .map((el, index) => index);
queue.sort((a, b) => a[2] - b[2]);
linked.forEach((el) => {
  let [x, y] = el;
  union(x - 1, y - 1);
});
let answer = 0;
queue.forEach((el) => {
  let [x, y, distance] = el;
  if (!isSame(x, y)) {
    union(x, y);
    answer += distance;
  }
});
console.log(answer.toFixed(2));
// MST
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
function distanceFromOther(i, j) {
  let x = Math.abs(i[0] - j[0]);
  let y = Math.abs(i[1] - j[1]);
  return +Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
