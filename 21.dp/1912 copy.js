const N = 10;
const array = [10, -4, 3, 1, 5, 6, -35, 12, 21, -1];

let result = array[0];
let dp = [];
dp[0] = array[0];
for (let i = 1; i < array.length; i++) {
  dp[i] = Math.max(array[i], array[i] + dp[i - 1]);
  result = Math.max(dp[i], result);
}
console.log(result);
