let dir = __dirname + "/2470.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let N = +input.shift();
let arr = input.shift().split(" ").map(Number);

arr = arr.sort((a, b) => a - b);

let start = 0;
let end = arr.length - 1;

let answer = [];
let min = Number.MAX_SAFE_INTEGER;
while (start < end) {
  let tmp = arr[start] + arr[end];
  if (Math.abs(min - 0) > Math.abs(tmp - 0)) {
    min = tmp;
    answer.push([arr[start], arr[end]]);
  }
  if (tmp >= 0) {
    end -= 1;
  } else {
    start += 1;
  }
}
console.log(answer[answer.length - 1].join(" "));
