function solution(n, tops) {
  let tmp = tops.filter((el) => el === 1).length;
  //   let number = n + n + 1 + tmp;
  let number = 12;
  let dp = new Array(number + 1).fill(0);

  dp[0] = 1;

  for (let i = 1; i <= number; i++) {
    if (i - 1 >= 0) {
      dp[i] += dp[i - 1];
    }
    if (i - 2 >= 0) {
      dp[i] += dp[i - 2];
    }
  }
  console.log(dp[number]);
}

let n = 2;
let tops = [0, 1];
solution(n, tops);
