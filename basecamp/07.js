//머쓱이보다 키 큰 사람
function solution(array, height) {
  var count = 0;
  for (let i = 0; i < array.length; i++) {
    if (height < array[i]) {
      count++;
    }
  }
  return count;

  //return array.filter((value) => value > height).length;
}

array = [149, 180, 192, 170];
height = 167;
console.log(solution(array, height));
