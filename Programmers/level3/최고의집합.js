function solution(n, s) {
  let answer = [];
  while (true) {
    let tmp = Math.floor(s / n);
    answer.push(tmp);
    s -= tmp;
    n -= 1;
    if (tmp === 0 && s !== 0) return [-1];
    if (s === 0) return answer.sort((a, b) => a - b);
    if (s !== 0 && n === 0) return [-1];
  }
}

let n = 2;
let s = 1;
console.log(solution(n, s));
