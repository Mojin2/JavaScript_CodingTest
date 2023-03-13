//가까운 수
function solution(array, n) {
  var new_array = array.map((item) => Math.abs(item - n));
  var min = new_array[0];
  var index = [];
  for (let i = 0; i < new_array.length; i++) {
    if (new_array[i] <= min) {
      min = new_array[i];
    }
  }
  for (let i = 0; i < new_array.length; i++) {
    if (new_array[i] === min) {
      index.push(i);
    }
  }
  if (index.length === 2) {
    return array[index[0]] > array[index[1]]
      ? array[index[1]]
      : array[index[0]];
  }
  return array[index[0]];
}

console.log(solution([10, 13, 15], 14));
