function solution(n, stations, w) {
  let aparts = Array(n).fill(0);
  stations.forEach((el) => {
    el = el - 1;
    if (el >= 0 && el < n) {
      aparts[el] = 1;
    }
    for (let i = 1; i <= w; i++) {
      if (el - i >= 0 && el - i < n) {
        aparts[el - i] = 1;
      }
      if (el + i >= 0 && el + i < n) {
        aparts[el + i] = 1;
      }
    }
  });

  let answer = 0;
  let count = 0;
  for (let i = 0; i < aparts.length; i++) {
    if (aparts[i] === 0) {
      count++;
      if (i === aparts.length - 1) {
        answer += Math.ceil(count / (w * 2 + 1));
        count = 0;
      }
    } else {
      answer += Math.ceil(count / (w * 2 + 1));
      count = 0;
    }
  }

  return answer;
}

let n = 16;
let stations = [9];
let W = 2;

console.log(solution(n, stations, W));

// w = 1 >> 3  Math.ceil(target /(w*2+1))
// 1~3 >> 1
// 4~6 >> 2
// 7~9 >> 3

// w = 2 >> 5
// 1~5 >> 1
// 6~10 >> 2
// 11~15 >> 3

// w = 3 >> 7
// 1 2 3 4 5 6 7 >> 1
//
