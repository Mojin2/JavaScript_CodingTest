//k의개수
function solution(i, j, k) {
  return Array(j - i + 1)
    .fill(0)
    .map((_, index) => i + index)
    .toString()
    .split(",")
    .filter((item) => item.includes(k))
    .join("")
    .split("")
    .filter((item) => item.includes(k)).length;
}

console.log(solution(1, 10000, 8));
