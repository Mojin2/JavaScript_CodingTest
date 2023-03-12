//배열의 유사도
function solution(s1, s2) {
  //   var answer = 0;
  //   for (let i = 0; i < s1.length; i++) {
  //     for (let j = 0; j < s2.length; j++) {
  //       if (s1[i] === s2[j]) {
  //         answer++;
  //       }
  //     }
  //   }
  //   return answer;

  return s1.filter((value) => s2.includes(value));

  //return s1.length + s2.length - new Set([...s1, ...s2]).size;
}

s1 = ["a", "b", "c"];
s2 = ["com", "b", "d", "p", "c"];
console.log(solution(s1, s2));

//arr.filter():조건을 충족하는 원소들을 모아 새로운 배열을 만듬
//arr.includes(some):some을 포함하고 있는지 판별
