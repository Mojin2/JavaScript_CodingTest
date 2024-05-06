function solution(sequence, k) {
  let prefixSum = Array(sequence.length + 1).fill(0);
  for (let i = 0; i < sequence.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + sequence[i];
  }
  let answer = [];
  let start = 0;
  let end = 0;
  while (true) {
    let sum = prefixSum[end] - prefixSum[start];
    if (sum > k) {
      start++;
    } else if (sum < k) {
      end++;
    } else {
      answer.push([start, end - 1, end - 1 - start]);
      start++;
      end++;
    }
    if (end >= prefixSum.length) break;
  }
  answer.sort((a, b) => a[2] - b[2]);
  return [answer[0][0], answer[0][1]];
}

console.log(solution([1, 1, 1, 2, 3, 4, 5], 5));
// [1,2,3,4,5]
// [0,1,3,6,10,15]
