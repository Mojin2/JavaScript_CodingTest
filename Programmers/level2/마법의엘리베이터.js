function solution(number) {
  let count = 0;
  number = number.toString().split("").map(Number).reverse();
  for (let i = 0; i < number.length; i++) {
    if (i === number.length - 1) {
      if (number[i] <= 5) {
        count += number[i];
      } else {
        count += 10 - number[i] + 1;
      }
      break;
    }
    /////////////////////////////
    if (number[i + 1] >= 5) {
      if (number[i] >= 5) {
        number[i + 1] += 1;
        count += 10 - number[i];
      } else {
        count += number[i];
      }
    } else {
      if (number[i] > 5) {
        number[i + 1] += 1;
        count += 10 - number[i];
      } else {
        count += number[i];
      }
    }
  }
  return count;
}
let storey = 155;
console.log(solution(storey));

// 75
// 74 76
// 73 77
// 72 78
// 71 79
// 70 80
// 80 90
// 90 100
// 100 0
// 0
