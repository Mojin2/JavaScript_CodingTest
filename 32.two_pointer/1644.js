let dir = __dirname + "/1644.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = +input[0];

// let list = [];
// for (let i = 2; i <= N; i++) {
//   let count = 0;
//   for (let j = 1; j <= i; j++) {
//     if (i % j === 0) {
//       count++;
//     }
//   }
//   if (count === 2) {
//     list.push(i);
//   }
// }

// 에라토스테네스의 체
function solution(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= N; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
}
let list = solution(N);
list = list
  .map((el, index) => {
    if (el) return index;
  })
  .filter((el) => el !== undefined);

let leftIdx = 0;
let rightIdx = 0;
let sum = list[0];
let count = 0;
while (leftIdx <= rightIdx && rightIdx < list.length) {
  if (sum === N) {
    count++;
    rightIdx++;
    sum += list[rightIdx];
  }
  if (sum < N) {
    rightIdx++;
    sum += list[rightIdx];
  } else if (sum > N) {
    sum -= list[leftIdx];
    leftIdx++;
  }
}

console.log(count);
