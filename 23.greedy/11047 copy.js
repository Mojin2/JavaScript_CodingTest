let dir = __dirname + "/11047.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let [N, K] = input.shift().split(" ").map(Number);

let coins = input.map(Number).sort((a, b) => b - a);
let idx = 0;
let count = 0;
while (true) {
  let tmp = Math.floor(K / coins[idx]);
  if (tmp === 0) {
    idx++;
    continue;
  }
  count += tmp;
  K = K - coins[idx] * tmp;
  idx++;
  if (K === 0) break;
}
// 4200
console.log(count);
