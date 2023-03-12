//짝수와 홀수의 개수
function solution(num_list) {
  var answer = [];
  var odd_count = 0;
  var even_count = 0;

  for (let i = 0; i < num_list.length; i++) {
    //item of num_list
    if (num_list[i] % 2 == 0) {
      even_count++;
    } else {
      odd_count++;
    }

    // var answer = [0, 0];
    // for (item of num_list) {
    //   answer[item % 2]++;
    // }
    // return answer;
  }
  answer.push(even_count, odd_count);
  return answer;
}

var num_list = [1, 3, 5, 7];
console.log(solution(num_list));
