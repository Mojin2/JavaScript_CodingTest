let prices = [1, 2, 3, 2, 3];

function solution(prices) {
  let answer = [];
  for (let i = 0; i < prices.length; i++) {
    let count = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] <= prices[j]) {
        count++;
      } else {
        count++;
        break;
      }
    }
    answer.push(count);
  }

  return answer;
}

console.log(solution(prices));

// answer = [4, 3, 1, 1, 0];
// totalSec = prices.length-1
