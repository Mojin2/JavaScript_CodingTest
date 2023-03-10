//몫 출력하기
function solution1(num1, num2) {
  var answer = Math.floor(num1 / num2);
  var answer2 = ~~(num1 / num2);
  //부정연산자는 비트연산을 통해 -(n+1)로 바꿈
  return answer;
}

console.log(solution1(7, 2));

//숫자 비교하기
function solution2(num1, num2) {
  //   if (num1 === num2) {
  //     return 1;
  //   } else return -1;

  //삼항 연산자 이용하기
  var answer = num1 === num2 ? 1 : -1;
  return answer;
}

console.log(solution2(1, 2));
