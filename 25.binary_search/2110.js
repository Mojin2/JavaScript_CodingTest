let dir = __dirname + "/2110.txt";
const path = process.platform === "linux" ? "/dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let [option, ...arr] = input;
let [N, C] = option.split(" ").map(Number);
arr = arr.map(Number).sort((a, b) => a - b);

console.log(N, C, arr);

let left = arr[0];
let right = arr[arr.length - 1];

while (left <= right) {
  let half = Math.floor((left + right) / 2);
  let count = 1;
  let prev = arr[0];
  for (const cur of arr) {
    if (cur - prev < half) continue;
    prev = cur;
    count += 1;
  }

  if (count < C) right = half - 1;
  else left = half + 1;
}
console.log(right);

// 1 4 8 , 1 4 9
