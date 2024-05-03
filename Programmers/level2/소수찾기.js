function solution(numbers) {
  numbers = numbers.split("").map(Number);
  let N = numbers.length;
  let tmp = [];
  let answer = [];
  function backtrack() {
    if (tmp.length < N && tmp.length > 0) {
      let c = tmp.map((el) => numbers[el]);
      answer.push(Number(c.join("")));
    }
    if (tmp.length === N) {
      let c = tmp.map((el) => numbers[el]);
      answer.push(Number(c.join("")));
      return;
    }
    for (let i = 0; i < numbers.length; i++) {
      if (tmp.includes(i)) continue;
      tmp.push(i);
      backtrack();
      tmp.pop();
    }
  }
  backtrack();
  function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  answer = Array(...new Set(answer));
  let count = 0;
  answer.forEach((el) => {
    if (isPrime(el)) {
      count++;
    }
  });
  return count;
}

console.log(solution("17"));
