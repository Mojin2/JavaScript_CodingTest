let dir = __dirname + "/6497.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let [m, n] = input[i].split(" ").map(Number);
  if (m === 0 && n === 0) break;
  let arr = input
    .slice(i + 1, i + 1 + n)
    .map((el) => el.split(" ").map(Number));
  let parents = Array(m)
    .fill(0)
    .map((el, index) => index);
  arr.sort((a, b) => a[2] - b[2]);
  let answer = 0;
  let total = 0;
  arr.forEach((el) => {
    let [x, y, distance] = el;
    total += distance;
    if (!isSame(x, y)) {
      union(x, y);
      answer += distance;
    }
  });
  console.log(total - answer);

  i = i + n;
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
}
