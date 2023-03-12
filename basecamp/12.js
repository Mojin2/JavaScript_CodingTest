function solution(my_string) {
  return Array.from(my_string).reverse().join("");
  //return my_string.split("").reverse().join("");
}
var my_string = "jaron";
console.log(solution(my_string));

//Array.from("String") => String을 쪼개서 배열로 만듬
//Array.from([1,2,3],x=>x+x) => 배열을 복사해 새로운 객체를 만듬
//arr.join([separator]) => 배열을 문자열로 합침
//separator로 구분되어 문자열로 합쳐짐
