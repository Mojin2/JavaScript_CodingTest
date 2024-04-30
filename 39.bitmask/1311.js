const { i } = require("mathjs");

let dir = __dirname + "/1311.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let n = +input.shift();
let costs = input.map((el) => el.split(" ").map(Number));

let dpp = Array(1 << n).fill(Infinity);
console.log(dpp);
function minCost(n, costs) {
  // dp 배열 초기화
  const dp = Array(1 << n).fill(Infinity);
  dp[0] = 0; // 초기값 : 모든 일을 아무도 맡지 않았을 때의 비용 0

  for (let mask = 0; mask < 1 << n; mask++) {
    // 현재 mask에서 일한 사람의 수를 구함
    const workers = countBits(mask);

    for (let i = 0; i < n; i++) {
      // 현재 mask에서 i번째 일을 아직 맡지 않았을 경우
      if (!(mask & (1 << i))) {
        // i번째 일을 할 사람을 고르기 위한 비트마스킹 연산
        const newMask = mask | (1 << i);
        // 현재까지의 최소 비용과 i번째 일을 맡는 비용의 합을 비교
        dp[newMask] = Math.min(dp[newMask], dp[mask] + costs[workers][i]);
      }
    }
  }
  return dp[(1 << n) - 1];
}
function countBits(num) {
  let count = 0;
  while (num > 0) {
    count += num & 1;
    num >>= 1;
  }
  return count;
}
console.log(minCost(n, costs));

const ma = new Map();
ma.set([1, 2, 3], 1);
console.log(ma);
