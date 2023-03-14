//다항식 더하기
function solution(polynomial) {
  let x_poly = polynomial
    .split(" + ")
    .filter((value) => value.includes("x"))
    .map((value) => parseInt(value.replace("x", "")) || 1)
    .reduce((a, c) => a + c, 0);
  let const_poly = polynomial
    .split(" + ")
    .filter((value) => !value.includes("x"))
    .reduce((a, c) => a + parseInt(c), 0);
  const answer = [];
  if (x_poly) {
    if (x_poly === 1) {
      answer.push("x");
    } else {
      answer.push(`${x_poly}x`);
    }
  }
  if (const_poly) {
    answer.push(const_poly);
  }
  return answer.join(" + ");
  //return x_poly + "x" + " + " + const_poly;
}

console.log(solution("3x + 7 + x"));
