function solution(numbers) {
  if (numbers.filter((v) => v === 0).length === numbers.length)
    return String(0);
  numbers = numbers.sort((a, b) => {
    return String(b) + String(a) - (String(a) + String(b));
  });
  return numbers.join("");
}
console.log(solution([0, 0, 0, 0, 0]));
