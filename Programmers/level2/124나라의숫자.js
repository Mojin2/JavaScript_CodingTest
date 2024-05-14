function solution(n) {
  let answer = [];
  let mod = [4, 1, 2];
  while (n > 0) {
    let a = Math.floor((n - 1) / 3);
    let b = mod[n % 3];
    answer.push(b);
    n = a;
  }
  return +answer.reverse().join("");
}
let n = 7;
console.log(solution(n));

// 3으로 나눴을때 나머지
// 1 > 1
// 2 > 2
// 0 > 4

// 7 = 3 * 2 + 1
