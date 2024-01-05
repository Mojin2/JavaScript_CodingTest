let dir = __dirname + "/1806.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let [N, S] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let leftIndex = 0;
let rightIndex = 0;
let answer = Number.MAX_SAFE_INTEGER;
let sum = arr[0];
while (leftIndex <= rightIndex && rightIndex < arr.length) {
  if (arr[leftIndex] >= S || arr[rightIndex] >= S) {
    answer = 1;
    break;
  }

  if (sum < S) {
    rightIndex++;
    sum += arr[rightIndex];
  } else {
    answer = Math.min(answer, rightIndex - leftIndex + 1);
    sum -= arr[leftIndex];
    leftIndex++;
  }
}

answer === Number.MAX_SAFE_INTEGER ? console.log(0) : console.log(answer);
