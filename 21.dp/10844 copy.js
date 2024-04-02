let dir = __dirname + "/10844.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = Number(input[0]);
// dp[i][0~9] : i 길이의 맨뒷자리가 0~9인 계단 수의 갯수
let dp = Array.from(Array(N + 1), () => Array(10).fill(0));
dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const mod = 1000000000;

for (let i = 2; i <= N; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) dp[i][0] = dp[i - 1][1];
    else if (j === 9) dp[i][9] = dp[i - 1][8];
    else dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];

    dp[i][j] %= mod;
  }
}

console.log(dp[N].reduce((acc, cur) => acc + cur) % mod);

// let dp = Array(N).fill(0);
// let arr = ["1","2","3","4","5","6","7","8","9"];
// dp[0] = arr.length;

// for (let i = 0 ;i < dp.length;i ++){
//   let count =0;
//   arr.forEach((el)=>{

//   })
// }
// console.log(dp[N - 1]);
// N = 1 >> 1,2,3,4,5,6,7,8,9
// N = 2 >> 10,12/21,23/32,34/43,45/54,56/65,67/76,78/87,89/98
// 9, 17 ,32
