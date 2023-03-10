//중복된 숫자 개수
function solution(array, n) {
  return array.filter((value) => value === n).length;
}
array = [1, 1, 2, 3, 4, 5];
n = 1;
console.log(solution(array, n));
