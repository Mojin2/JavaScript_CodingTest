//한번만 등장한 문자
function solution(s) {
  var answer = "";
  var obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = 0;
  }
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] += 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === 1) {
      answer += s[i];
    }
  }
  return answer.split("").sort().join("");
}

console.log(solution("hello"));
