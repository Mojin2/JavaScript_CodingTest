//특정 문자 제거하기
function solution(my_string, letter) {
  return Array.from(my_string)
    .filter((value) => value !== letter)
    .join("");

  //   let reg = new RegExp(letter, "g");
  //   return my_string.replace(reg, "");
  //   // my_string(/B/g,'')
}

my_string = "BCBdbe";
letter = "B";
console.log(solution(my_string, letter));

//replace(a,b): a를 b로 바꿔줌
//replace(정규식g,b) : 전역 환경에서 정규식에 맞게 b로 바꿔줌
//정규식
//[123]: 1,2,3에 매핑되는 것을 지움
//[1-9]: 1부터 9까지 매핑되는 것을 지움
//[a-z]: 소문자 영어를 지움

////////////정규표현식에 대한 공부하기!!///////////////
