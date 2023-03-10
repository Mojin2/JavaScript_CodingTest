//배열의 평균값
function solution(numbers) {
  //   var sum = 0;
  //   for (let i = 0; i < numbers.length; i++) {
  //     sum += numbers[i];
  //   }
  var sum = numbers.reduce(function (a, c) {
    return a + c;
  }, 0);
  return sum / numbers.length;
}

numbers = [1, 2, 3, 4];

console.log(solution(numbers));
