function solution(numbers) {
  return numbers.map((item) => 2 * item);
}

numbers = [1, 2, 3, 4, 5];
console.log(solution(numbers));

//map함수는 데이터를 추출하는 용도로도 사용가능
//ex)data.map((value)=> value['name'])
