function solution(arr) {
  let zeroCount = 0;
  let oneCount = 0;

  function merge(arr) {
    if (arr.length === 1) {
      if (arr[0][0] === 1) {
        oneCount++;
        return;
      } else {
        zeroCount++;
        return;
      }
    }
    let tmp = arr.reduce((acc, cur) => acc.concat(cur));

    if (tmp.filter((v) => v === 1).length === tmp.length) {
      oneCount++;
      return;
    }
    if (tmp.filter((v) => v === 0).length === tmp.length) {
      zeroCount++;
      return;
    }

    let pivot = arr.length / 2;
    let one = arr.slice(0, pivot).map((el) => el.slice(0, pivot));
    let two = arr.slice(pivot).map((el) => el.slice(0, pivot));
    let three = arr.slice(0, pivot).map((el) => el.slice(pivot));
    let four = arr.slice(pivot).map((el) => el.slice(pivot));
    merge(one);
    merge(two);
    merge(three);
    merge(four);
  }
  merge(arr);
  return [zeroCount, oneCount];
}

let arr = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
];
console.log(solution(arr));
