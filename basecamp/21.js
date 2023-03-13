//팩토리얼
function solution(n) {
  var acc = 1;
  var count = 0;
  for (let i = 1; acc * i <= n; i++) {
    acc *= i;
    count += 1;
  }
  return count;
}
n = 7;
console.log(solution(n));
