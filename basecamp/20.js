//A로 B만들기
function solution(before, after) {
  return before.split("").sort().join() === after.split("").sort().join()
    ? 1
    : 0;
}

let before = "olleh";
let after = "hello";
console.log(solution(before, after));
