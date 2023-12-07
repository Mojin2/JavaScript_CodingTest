let dir = __dirname + "/1300.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N, k] = input.map(Number);

let left = 1;
let right = N * N;
let answer = 0;
while (left <= right) {
  let half = Math.floor((right + left) / 2);
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    let val = 0;
    half / i > N ? (val = N) : (val = Math.floor(half / i));
    sum += val;
  }
  if (sum >= k) {
    answer = half;
    right = half - 1;
  } else {
    left = half + 1;
  }
}
console.log(answer);
