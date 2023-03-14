//저주의 숫자 3
function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += 1;
    while (answer % 3 === 0 || answer.toString().split("").includes("3")) {
      console.log("run" + " " + answer);
      answer += 1;
    }
  }
  return answer;
}

console.log(solution(15));
