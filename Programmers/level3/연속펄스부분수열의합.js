function solution(sequence) {
  let plusStart = Array(sequence.length).fill(0);
  let minusStart = Array(sequence.length).fill(0);
  let answer = 0;
  sequence.forEach((el, index) => {
    if (index === 0) {
      plusStart[index] = el;
      minusStart[index] = -el;
    } else if (index % 2 === 1) {
      plusStart[index] = Math.max(plusStart[index - 1] - el, -el);
      minusStart[index] = Math.max(minusStart[index - 1] + el, el);
    } else {
      plusStart[index] = Math.max(plusStart[index - 1] + el, el);
      minusStart[index] = Math.max(minusStart[index - 1] - el, -el);
    }
    answer = Math.max(answer, plusStart[index], minusStart[index]);
  });
  return answer;
}

let sequence = [-100, 0, 100];
console.log(solution(sequence));
