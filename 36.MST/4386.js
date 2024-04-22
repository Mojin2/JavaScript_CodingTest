let dir = __dirname + "/4386.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let n = +input.shift();
input = input.map((el) => el.split(" ").map(Number).map(Number));
let parents = Array(n + 1)
  .fill(0)
  .map((el, index) => index);
let queue = [];
for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    queue.push([i, j, distanceFromOther(input[i], input[j])]);
  }
}
queue.sort((a, b) => a[2] - b[2]);
// [
//   [[1, 1], [2, 2], 1.41],
//   [[2, 2], [2, 4], 2],
//   [[1, 1], [2, 4], 3.16],
// ];
let answer = 0;
queue.forEach((el) => {
  let [a, b, distance] = el;
  if (!isSame(a, b)) {
    union(a, b);
    answer += distance;
  }
});

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

function distanceFromOther(i, j) {
  let x = Math.abs(i[0] - j[0]);
  let y = Math.abs(i[1] - j[1]);
  return +Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)).toFixed(2);
}
