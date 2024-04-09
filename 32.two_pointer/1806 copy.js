let dir = __dirname + "/1806.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");
console.log(dir);
let [N, S] = input.shift().split(" ").map(Number);
let arr = input.shift().split(" ").map(Number);

let cumSum = [0];
for (let i = 1; i <= arr.length; i++) {
  cumSum[i] = cumSum[i - 1] + arr[i - 1];
}
let start = 0;
let end = 0;
let answer = Number.MAX_SAFE_INTEGER;
while (end < arr.length) {
  let cal = cumSum[end + 1] - cumSum[start];
  if (cal >= S) {
    answer = Math.min(answer, end - start + 1);
  }
  if (cal >= S) {
    start += 1;
  } else {
    end += 1;
  }
}
if (answer === Number.MAX_SAFE_INTEGER) {
  console.log(0);
} else {
  console.log(answer);
}
