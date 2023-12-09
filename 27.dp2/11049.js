let dir = __dirname + "/11049.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let [N, ...arr] = input;
N = +N;
arr = arr.map((el) => el.split(" ").map(Number));

let dp = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
let ms = [[0, 0], ...arr];

for (let i = 1; i < N; i++) {
  for (let x = 1; x + i <= N; x++) {
    let y = x + i;

    dp[x][y] = Infinity;

    for (let j = x; j < y; j++) {
      dp[x][y] = Math.min(
        dp[x][y],
        dp[x][j] + dp[j + 1][y] + ms[x][0] * ms[j][1] * ms[y][1]
      );
    }
  }
}
console.log(dp);

// [
//   [ 0, 0, 0, 0 ],
//   [ 0, 0, 30, 90 ],
//   [ 0, 0, 0, 36 ],
//   [ 0, 0, 0, 0 ]
// ]

// i =1 , x= 1,2 y = 2,3 j = 1, 2
