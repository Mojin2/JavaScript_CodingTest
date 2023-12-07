let dir = __dirname + "/2470.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let left = 0;
let right = arr.length - 1;
let answer = Number.MAX_SAFE_INTEGER;
let returnValue = [];
while (left < right) {
  let sum = arr[left] + arr[right];
  if (Math.abs(answer - 0) > Math.abs(sum - 0)) {
    answer = sum;
    returnValue.push([arr[left], arr[right]]);
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  } else {
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(returnValue[returnValue.length - 1].join(" "));
