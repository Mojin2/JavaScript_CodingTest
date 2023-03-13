## 부정연산자

- 부정연산자는 비트연산을 통해 -(n+1)로 바꿈

## Array함수

- reduce()작동방식
- ruduce(funtion(accumlator, currentValue, currentIndex, array)

- map함수는 데이터를 추출하는 용도로도 사용가능
- ex)data.map((value)=> value['name'])

- arr.filter():조건을 충족하는 원소들을 모아 새로운 배열을 만듬
- arr.includes(some):some을 포함하고 있는지 판별

- Array.from("String") => String을 쪼개서 배열로 만듬
- Array.from([1,2,3],x=>x+x) => 배열을 복사해 새로운 객체를 만듬
- arr.join([separator]) => 배열을 문자열로 합침
- separator로 구분되어 문자열로 합쳐짐

- arr.reverse() : 배열의 순서를 역순으로 바꿈
- arr.sort() : 정렬함수

- slice(start,[ end]): start부터 end전까지 새로운 배열객체 반환
- splice(start,count): start부터 count만큼 요소를 지움

## String 함수

- for (let i of string) : 반복문
- 'string'.match(/[str]/g)

## 전개구문

- 펼칠 대상이 객체인 경우 {...obj}
- 펼칠 대상이 배열인 경우 [...arr], {...arr}
- 펼쳐서 새로운 객체나 배열을 만들 경우 다른 주소 값을 가진 독립적인 객체
- 매개변수로 이용 : function myFunction(name, ...members)

## Set객체

- set객체는 중복되지 않는 유일한 값을의 집합
- 요소의 순서에는 의미가 없고 인덱스로 접근 불가
- const set = new Set();
- set.has(), set.add(), set.size(), set.delete(), set.clear()

## 정규표현식

- replace(a,b): a를 b로 바꿔줌
- replace(정규식g,b) : 전역 환경에서 정규식에 맞게 b로 바꿔줌
- 정규식
- [123]: 1,2,3에 매핑되는 것을 지움
- [1-9]: 1부터 9까지 매핑되는 것을 지움
- [a-z]: 소문자 영어를 지움
- let reg = new RegExp(letter, "g");
- return my_string.replace(reg, "");
- my_string(/B/g,'')
