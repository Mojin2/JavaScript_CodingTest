let dir = __dirname + "/10830.txt";
const path = process.platform === "linux" ? "/dev/stdin" : dir;
let input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
let [[N, B], ...arr] = input;

let memo = {};
memo[2] = mutiple(arr, arr);
function cal(B, arr) {
  if (memo[B] !== undefined) {
    return memo[B];
  }
  // 거듭제곱이 1일경우 arr 그대로 리턴
  if (B === 1) return arr;

  let half = Math.floor(B / 2);
  // 거듭제곱이 짝수일경우
  if (B !== 2 && B % 2 === 0) {
    memo[B] = mutiple(cal(half, arr), cal(half, arr)).map((el) =>
      el.map((el2) => el2 % 1000)
    );
    return memo[B];
  }
  // 거듭제곱이 홀수일경우
  else if (B !== 2 && B % 2 === 1) {
    memo[B] = mutiple(cal(half, arr), cal(half + 1, arr)).map((el) =>
      el.map((el2) => el2 % 1000)
    );
    return memo[B];
  }
}
let answer = cal(B, arr);
answer = answer.map((el) => el.map((el2) => el2 % 1000));
answer = answer.map((el) => el.join(" ")).join("\n");
console.log(answer);

function mutiple(arr1, arr2) {
  let N = arr1.length;
  let answer = Array.from(Array(N), () => Array(N).fill(0));
  for (let i = 0; i < N; i++) {
    let front = arr1[i];
    for (let j = 0; j < N; j++) {
      let back = [];
      for (let z = 0; z < N; z++) {
        back.push(arr2[z][j]);
      }
      let tmp = 0;
      for (let a = 0; a < front.length; a++) {
        tmp += front[a] * back[a];
      }
      answer[i][j] = tmp;
    }
  }
  return answer;
}
