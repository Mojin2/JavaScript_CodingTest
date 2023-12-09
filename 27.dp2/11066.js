let dir = __dirname + "/11066.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let T = +input.shift();
let arr = [];
for (let i = 0; i < 2 * T; i += 2) {
  let tmp = input[i + 1].split(" ").map(Number);
  arr.push(tmp);
}
let answer = [];
arr.forEach((test) => {
  let prefix = [];
  prefix[0] = test[0];
  for (let i = 1; i < test.length; i++) {
    prefix[i] = prefix[i - 1] + test[i];
  }
  answer.push(minimumPrice(test, prefix));
});

console.log(answer.join("\n"));
function minimumPrice(array, prefix) {
  let dp = Array(array.length).fill(0);
  dp[0] = array[0];
  dp[1] = array[0] + array[1];

  for (let i = 2; i < array.length; i++) {
    dp[i] = Math.min(
      dp[i - 2] + array[i - 1] + array[i] + prefix[i],
      dp[i - 1] + array[i] + prefix[i - 1]
    );
  }
  return dp;
}

// array = [40, 30, 30, 50]
// dp = [40, 70, 160, 300]

// 40 + 30 = 70 70+ 30 = 100 70+100= 170
// 40 30+30 = 60 60+100 = 160
