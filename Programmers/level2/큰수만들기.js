function solution(number, k) {
  const stack = [];

  for (let num of number) {
    while (k > 0 && stack[stack.length - 1] < num) {}
  }
}

console.log(solution("4177252841", 4));

// k = 4
// 4177252841
//   77 5 841
// 41  2 2
