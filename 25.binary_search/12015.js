let dir = __dirname + "/12015.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let [N, arr] = input;
N = +N;
arr = arr.split(" ").map(Number);

// dp를 이용하는 방법
let dp = Array(Math.max(...arr)).fill(0);
dp[arr[0]] = 1;
for (let i = 1; i < N; i++) {
  let tmp = dp.slice(0, arr[i]);
  dp[arr[i]] = Math.max(...tmp) + 1;
}

// console.log(Math.max(...dp));

// binary search를 이용하는 방법

// 6
// 10 20 10 30 20 50

let start = 0;
let end = arr.length - 1;

function binarySearch(arr, start, end, target) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return end;
}

function LIS(arr) {
  const lis = [];

  lis.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > lis[lis.length - 1]) {
      lis.push(arr[i]);
    } else {
      let idx = binarySearch(lis, 0, lis.length - 1, arr[i]);
      lis[idx] = arr[i];
    }
  }
  return lis.length;
}

console.log(LIS(arr));
