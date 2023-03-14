//외계어 사전
function solution(spell, dic) {
  //   for (let i = 0; i < dic.length; i++) {
  //     if (
  //       dic[i].includes(spell[0]) &&
  //       dic[i].includes(spell[1]) &&
  //       dic[i].includes(spell[2])
  //     ) {
  //       return 1;
  //     }
  //   }
  //   return 2;
  return dic.some(
    (v) => [...v].sort().toString() === [...spell].sort().toString()
  )
    ? 1
    : 2;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]));
console.log(solution(["z", "d", "x"], ["dww", "zdx", "def"]));
