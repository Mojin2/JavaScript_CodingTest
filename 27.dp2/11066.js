let dir = __dirname + "/11066.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

console.log(input);

let N = 4;
let arr = [40, 30, 30, 50];

// dp 1차원으로 풀경우
// dp[i]

// dp 2차원으로 풀경우
// dp[i][j]
