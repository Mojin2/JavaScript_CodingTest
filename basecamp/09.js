//피자 나눠 먹기(1)
function solution(n) {
  var pizza = 7;
  let i = 1;
  while (n > pizza) {
    pizza += pizza;
    i++;
  }
  return i;

  //다른 방식의 풀이
  //   if (n / 7 == ~~(n / 7)) {
  //     return n / 7;
  //   }
  //   return ~~(n / 7) + 1;
}

console.log(solution(15));
