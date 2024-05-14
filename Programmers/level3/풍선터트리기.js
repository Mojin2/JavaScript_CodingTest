function solution(a) {
  if (a.length <= 2) return a.length;

  let count = 0;

  for (let i = 1; i < a.length - 1; i++) {
    let arrLeft = a.slice(0, i);
    let minLeft = Math.min(...arrLeft);
    let arrRight = a.slice(i + 1);
    let minRight = Math.min(...arrRight);
    // 작은 값이 오른쪽에만 존재
    if (a[i] < minLeft && a[i] > minRight) count++;
    // 작은 값이 왼쪽에만 존재
    else if (a[i] > minLeft && a[i] < minRight) count++;
    // 작은 값이 존재하지 않을 경우
    else if (a[i] < minLeft && a[i] < minRight) count++;
    else continue;
  }
  return count + 2;
}

let a = [9, -1, -5];
console.log(solution(a));
