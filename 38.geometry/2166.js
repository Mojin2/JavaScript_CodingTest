let dir = __dirname + "/2166.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let N = +input.shift();
input = input.map((el) => el.split(" ").map(Number));
input.unshift([0, 0]);

let sum = 0;
for (let i = 1; i <= N - 1; i++) {
  sum += input[i][0] * input[i + 1][1] - input[i + 1][0] * input[i][1];
}

let answer = sum + input[N][0] * input[1][1] - input[1][0] * input[N][1];

console.log((Math.abs(answer) / 2).toFixed(1));
