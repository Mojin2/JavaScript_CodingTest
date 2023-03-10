## 스택

- 한 쪽 끝에서만 자료를 넣거나 뺄 수 있는 선형구조
- LIFO (Last In First Out)
- S.top() : 스택의 가장 윗 데이터를 반환
- S.pop() : 스택의 가장 윗 데이터를 삭제
- S.push() : 스택의 가장 윗 데이터 위에 메모리를 생성, 데이터 삽입
- S.empty() : 스택이 비어있다면 1을 반환하고 그렇지 않다면 0을 반환

## 큐

- FIFO (First In First Out)
- Q.shift() : 데이터를 추출
- push와 shift를 이용해서 enqueue(), dequeue() 함수 구현 가능

## Array.prototype

- slice(start,end): 배열에서 start index부터 end index 전까지를 반환
- slice함수는 원본 배열의 값을 변화시키지 않음

- splice(start,deleteCount,item1,item2) : 기존 요소 삭제하거나 추가
- ex)splice(10,2,'a') : 10번째 인덱스 부터 2개요소 제거 후 'a'추가

## Linked List

- 다른 언어에서는 메모리 효율을 위해서 사용
- js에서는 본인이 구상한 자료구조의 필요성에 의해서 사용
