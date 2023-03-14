//문자열밀기
function solution(A, B) {
  var arr_A = [...A];
  var arr_B = [...B];
  for (let i = 0; i < arr_A.length; i++) {
    if (arr_A.toString() === arr_B.toString()) {
      return i;
    }
    arr_A.unshift(arr_A.pop());
  }

  return -1;
}

console.log(solution("hello", "lohel"));
