//등수 매기기
function solution(score) {
  let total_sum = score.map((v) => v[0] + v[1]);
  let sort_arr = total_sum.slice().sort((a, b) => b - a);
  return total_sum.map((v) => sort_arr.indexOf(v) + 1);
}

console.log(
  solution([
    [80, 70],
    [90, 50],
    [70, 80],
    [50, 80],
  ])
);
