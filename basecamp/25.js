//잘라서 배열로 저장하기
function solution(my_str, n) {
  //   var answer = [];
  //   var tem = "";
  //   for (let i = 0; i <= my_str.length; i++) {
  //     if (i % n === 0 || i === my_str.length) {
  //       if (i !== 0) {
  //         answer.push(tem);
  //       }
  //       tem = "";
  //       tem += my_str[i];
  //       continue;
  //     }
  //     tem += my_str[i];
  //   }

  //   return answer;

  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}

console.log(solution("abcdef123", 3));
