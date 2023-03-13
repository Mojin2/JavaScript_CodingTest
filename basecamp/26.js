//진료순서 정하기
function solution(emergency) {
  var obj = {};
  var new_em = emergency
    .filter((item) => item)
    .sort(function (a, b) {
      return a - b;
    })
    .reverse();
  for (let i = 0; i < emergency.length; i++) {
    obj[new_em[i]] = 0;
  }
  for (let i = 0; i < emergency.length; i++) {
    obj[new_em[i]] = i + 1;
  }
  for (let i = 0; i < emergency.length; i++) {
    emergency[i] = obj[emergency[i]];
  }
  return emergency;
}

console.log(solution([30, 10, 23, 6, 100]));

var emergency = [3, 76, 24];
var new1 = [76, 24, 3];
emergency.map((v) => new1.indexOf(v));
console.log(new1.indexOf(3));
