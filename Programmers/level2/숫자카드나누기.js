function solution(arrayA, arrayB) {
  function gcd(n1, n2) {
    return n1 % n2 === 0 ? n2 : gcd(n2, n1 % n2);
  }
  function tmp(arrayA, arrayB) {
    let gcdA = 0;
    arrayA.sort((a, b) => a - b);
    arrayA.forEach((A) => (gcdA = gcd(gcdA, A)));
    if (arrayB.some((B) => B % gcdA === 0)) return 0;
    return gcdA;
  }
  let A = tmp(arrayA, arrayB);
  let B = tmp(arrayB, arrayA);
  return Math.max(A, B);
}

let arrayA = [3, 10];
let arrayB = [8];
console.log(solution(arrayA, arrayB));
