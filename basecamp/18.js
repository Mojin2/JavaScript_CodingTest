//369게임
function solution(order) {
  var answer = 0;
  for (let i of order) {
    if (i.includes("3") || i.includes("6") || i.includes("9")) {
      answer++;
    }
  }

  return answer;
}

order = "1";
console.log(solution(order));
