//중복된 문자 제거
function solution(my_string) {
  let s = new Set(my_string);
  return Array.from(s).join("");
}

var my_string = "We are the world";
console.log(solution(my_string));
