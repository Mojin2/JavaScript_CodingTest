let dir = __dirname + "/3273.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let N = +input.shift();
let arr = input.shift().split(" ").map(Number);
let target = +input.shift();

arr = arr.sort((a, b) => a - b);
let start = 0;
let end = arr.length - 1;

let count = 0;
while (start < end) {
  let tmp = arr[start] + arr[end];
  if (tmp === target) {
    count++;
    start += 1;
    end -= 1;
  }
  if (tmp > target) end -= 1;
  if (tmp < target) start += 1;
}

console.log(count);
