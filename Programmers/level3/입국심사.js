function solution(n, times) {
  times.sort((a, b) => a - b);
  let start = 1;
  let end = 1000000000 * 1000000000;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;
    times.forEach((time) => (sum += Math.floor(mid / time)));
    if (sum >= n) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

let n = 6;
let times = [7, 10];

console.log(solution(n, times));
