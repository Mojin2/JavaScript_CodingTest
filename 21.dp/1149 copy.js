// const N = 3;
// let houses = [
//   [26, 40, 83],
//   [49, 60, 57],
//   [13, 89, 99],
// ];

// red, green, blue

let dir = __dirname + "/1149.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = Number(input.shift());
const houses = input.map((el) => el.split(" ").map(Number));

dp = Array.from(Array(N), () => Array(3).fill(Number.MAX_SAFE_INTEGER));
dp[0] = houses[0];
for (let i = 1; i < houses.length; i++) {
  for (let a = 0; a < houses[i].length; a++) {
    for (let b = 0; b < houses[i].length; b++) {
      if (a === b) continue;
      let tmp = houses[i][a] + dp[i - 1][b];
      dp[i][a] = Math.min(dp[i][a], tmp);
    }
  }
}

console.log(Math.min(...dp[N - 1]));

// let dp = [];
// let result = Math.min(...houses[0]);
// let index = houses[0].indexOf(result);
// dp[0] = result;

// for (let i = 1; i < houses.length; i++) {
//   houses[i][index] = Number.MAX_SAFE_INTEGER;
//   let min = Math.min(...houses[i]);
//   index = houses[i].indexOf(min);
//   dp[i] = dp[i - 1] + min;
// }

// console.log(dp[N - 1]);

//[1,2,3]
//[1,2,3]
// [1,2],[1,3],[2,1],[2,3],[3,1],[3,2]

// console.log(N, houses);
