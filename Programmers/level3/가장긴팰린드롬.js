function solution(s) {
  let answer1 = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < s.length; i++) {
    let count = 1;
    let w = 1;
    while (true) {
      if (s[i - w] !== undefined && s[i + w] !== undefined) {
        if (s[i - w] === s[i + w]) {
          count += 2;
          w++;
        } else break;
      } else break;
    }
    answer1 = Math.max(answer1, count);
  }
  let answer2 = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < s.length - 1; i++) {
    let count = 0;
    let w = 0;
    while (true) {
      if (s[i - w] !== undefined && s[i + 1 + w] !== undefined) {
        if (s[i - w] === s[i + 1 + w]) {
          count += 2;
          w++;
        } else break;
      } else break;
    }
    answer2 = Math.max(answer2, count);
  }
  return Math.max(answer1, answer2);
}

let s = "abacde";
console.log(solution(s));
