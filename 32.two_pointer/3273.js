let dir = __dirname + "/3273.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let [n, arr, x] = input;
n = +n;
x = +x;
arr = arr
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let left = 0;
let right = arr.length - 1;
let count = 0;
while (left <= right) {
  let sum = arr[left] + arr[right];
  if (left === right) {
    break;
  }
  if (sum === x) {
    count += 1;
    left += 1;
    right -= 1;
  } else if (sum > x) {
    right--;
  } else if (sum < x) {
    left++;
  }
}
console.log(count);
