function factorial(n) {
  if (n === 1) return 1;
  else return n * factorial(n - 1);
}
function solution(n, k) {
  let numbers = Array(n)
    .fill(0)
    .map((_, i) => i + 1);
  let answer = [];
  let fac = factorial(n);
  k--;
  while (answer.length !== n) {
    fac = fac / numbers.length; // 맨 앞 숫자가 고정됐을때 경우의 수
    let index = Math.floor(k / fac); // 맨 앞 숫자 = index+1
    answer.push(numbers[index]);
    k = k % fac;
    numbers = numbers.filter((v) => v !== numbers[index]);
  }
  return answer;
}

let n = 3;
let k = 5;

console.log(solution(n, k));

// 3
// len => 6 / 3 = 2
// index =>  Math.floor(5 / 2) = 2
// reminder => 5 % 2 = 1

// first [1,2,3,4]
// n = 4 k = 10
// len = fac(4)/4 = 6
// index = Math.floor(k/len) = 1
// reminder = k%len = 4

// second [1,3,4]
// n = 3 k = 4
// len = fac(3)/3 = 2
// index = Math.floor(k/len) = 2
// reminder = k%len = 0

// third [1,3]

// [ 2, 3, 4, 1 ],
