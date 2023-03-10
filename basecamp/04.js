// 양꼬치
function solution(n, k) {
  return (price = 12000 * n + 2000 * k - Math.floor(n / 10) * 2000);
}

console.log(solution(10, 3));
