let dir = __dirname + "/1806.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let [N, S] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
let prefixSum = Array(N).fill(0);
for (let i = 0; i < N; i++) {
  if (i === 0) {
    prefixSum[i] = arr[i];
  } else {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
}
console.log(prefixSum);
let idx1 = 0;
let idx2 = 0;
