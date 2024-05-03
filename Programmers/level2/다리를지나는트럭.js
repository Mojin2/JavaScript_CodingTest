function solution(bridge_length, weight, truck_weights) {
  let answer = 1;
  let stack = [];
  let i = 0;
  let count = 0;
  while (true) {
    if (count === truck_weights.length) break;

    let sum = stack.reduce((acc, cur) => acc + cur[0], 0);
    // 트럭 넣기
    if (sum + truck_weights[i] <= weight) {
      stack.push([truck_weights[i], 0]);
      i++;
    }
    // 시간 경과
    stack = stack.map((el) => [el[0], el[1] + 1]);
    answer++;
    // 트럭 빼기
    while (stack.length > 0) {
      if (stack[0][1] === bridge_length) {
        stack.shift();
        count++;
      } else {
        break;
      }
    }
  }

  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
