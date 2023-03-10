//짝수의 합
function solution(n) {
  result = 0;
  while (n >= 0) {
    if (n % 2 == 0) {
      result = result + n;
    }
    n--;
  }
  return result;
}

console.log(solution(4));

console.log(
  Array(10)
    .fill()
    .map((_, i) => i + 1)
    .filter((value) => value % 2 === 0)
    .reduce((a, c) => a + c, 0)
);

//reduce()작동방식
//ruduce(funtion(accumlator, currentValue, currentIndex, array)

var flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(function (a, c) {
  return a.concat(c);
}, []);

console.log(flattened);
