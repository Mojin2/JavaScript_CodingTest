//컨트롤제트
function solution(s) {
  var acc = 0;
  arr_s = s.split(" ");
  for (let i = 0; i < arr_s.length; i++) {
    if (arr_s[i] !== "Z") {
      acc += Number(arr_s[i]);
    } else {
      acc -= Number(arr_s[i - 1]);
    }
  }
  return acc;
}

console.log(solution("10 Z 20 Z"));
