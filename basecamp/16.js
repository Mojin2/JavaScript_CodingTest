//배열 회전시키기
function solution(numbers, direction) {
  //   if (direction === "right") {
  //     var tmp = numbers[numbers.length - 1];
  //     for (let i = numbers.length - 1; i > 0; i--) {
  //       numbers[i] = numbers[i - 1];
  //     }
  //     numbers[0] = tmp;
  //   } else {
  //     var tmp = numbers[0];
  //     for (let i = 1; i < numbers.length; i++) {
  //       numbers[i - 1] = numbers[i];
  //     }
  //     numbers[numbers.length - 1] = tmp;
  //   }

  //   return numbers;

  if (direction === "right") {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }

  return numbers;
}

numbers = [1, 2, 3, 4, 5];
console.log(solution(numbers, "left"));
