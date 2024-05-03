function solution(topping) {
  let answer = 0;
  let n = topping.length;
  let tmpA = Array(10001).fill(0);
  let tmpB = Array(10001).fill(0);
  let countA = 0;
  let countB = 0;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      tmpA[topping[i]] += 1;
      countA++;
    } else {
      if (tmpB[topping[i]] === 0) {
        countB++;
      }
      tmpB[topping[i]] += 1;
    }
  }
  if (countA === countB) answer++;

  for (let i = 1; i < n; i++) {
    if (tmpA[topping[i]] === 0) {
      countA++;
    }
    tmpA[topping[i]] += 1;
    tmpB[topping[i]] -= 1;
    if (tmpB[topping[i]] === 0) {
      countB--;
    }
    if (countA === countB) answer++;
  }

  return answer;
}

let topping = [1];
console.log(solution(topping));
