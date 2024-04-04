let dir = __dirname + "/11659.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let arr = input.shift().split(" ").map(Number);
let list = input.map((el) => el.split(" ").map(Number));

function prefixSum(arr) {
  let cumSum = Array(arr.length + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    cumSum[i + 1] = cumSum[i] + arr[i];
  }
  return cumSum;
}

let cumSum = prefixSum(arr);

let answer = [];
list.forEach((el) => {
  let [a, b] = el;
  answer.push(cumSum[b] - cumSum[a - 1]);
});

console.log(answer.join("\n"));
