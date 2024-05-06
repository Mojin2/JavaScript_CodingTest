function solution(weights) {
  weights.sort((a, b) => a - b);
  return weights;
}
let weights = [100, 180, 360, 100, 270];
console.log(solution(weights));

// (1,1) , (2,3) , (2,4) , (3,4)
