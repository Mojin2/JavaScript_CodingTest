// let dir = __dirname + "/11444.txt";
// const path = process.platform === "linux" ? "/dev/stdin" : dir;
// let input = require("fs").readFileSync(path).toString().trim().split("\n");

// let N = Number(input[0]);
// let memo = {};

// function cal(B, arr) {
//   if (memo[B] !== undefined) {
//     return memo[B];
//   }
//   // 거듭제곱이 1일경우 arr 그대로 리턴
//   if (B === 1) return arr;

//   let half = Math.floor(B / 2);
//   // 거듭제곱이 짝수일경우
//   if (B !== 2 && B % 2 === 0) {
//     memo[B] = mutiple(cal(half, arr), cal(half, arr));
//     return memo[B];
//   }
//   // 거듭제곱이 홀수일경우
//   else if (B !== 2 && B % 2 === 1) {
//     memo[B] = mutiple(cal(half, arr), cal(half + 1, arr));
//     return memo[B];
//   }
// }
// let arr = [
//   [BigInt(1), BigInt(1)],
//   [BigInt(1), BigInt(0)],
// ];
// memo[2] = mutiple(arr, arr);
// let answer = cal(N, arr);
// answer = answer.map((el) => el.map((el2) => BigInt(el2) % BigInt(1000000007)));
// console.log(answer[0][1].toString(10));

// function mutiple(arr1, arr2) {
//   let N = arr1.length;
//   let answer = Array.from(Array(N), () => Array(N).fill(0));
//   for (let i = 0; i < N; i++) {
//     let front = arr1[i].map((el) => BigInt(el));
//     for (let j = 0; j < N; j++) {
//       let back = [];
//       for (let z = 0; z < N; z++) {
//         back.push(arr2[z][j]);
//       }
//       let tmp = BigInt(0);
//       back = back.map((el) => BigInt(el));
//       for (let a = 0; a < front.length; a++) {
//         tmp += front[a] * back[a];
//       }
//       answer[i][j] = tmp;
//     }
//   }
//   return answer;
// }

// let input = require("fs").readFileSync(path).toString().trim().split("\n")
