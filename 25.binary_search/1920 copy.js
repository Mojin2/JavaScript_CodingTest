const { bitAnd } = require("mathjs");

let dir = __dirname + "/1920.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let N = Number(input.shift());
let arr = input.shift().split(" ").map(Number);
arr = arr.sort((a, b) => a - b);
let M = Number(input.shift());
let targets = input.shift().split(" ").map(Number);

targets.forEach((target) => {
  console.log(binary(arr, target));
});

function binary(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    }
  }
  return 0;
}
