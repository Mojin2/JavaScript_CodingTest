class Stack {
  constructor() {
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
  }

  pop(index) {
    if (index === this.arr.length - 1) {
      return this.arr.pop();
    }

    let result = this.arr.splice(index, 1);
    return result;
  }

  empty() {
    if (this.arr.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  top() {
    return this.arr[this.arr.length - 1];
  }

  bottom() {
    return this.arr[0];
  }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s); //Stack{arr:[10,20,30]}
//console.log(s.arr[0]); //data접근방식

let popValue = s.pop(2);
console.log("s.pop(2) 실행 이후");
console.log(s);
console.log("popValue : " + popValue);
console.log("s.top() : " + s.top());
console.log("s.bottom() : " + s.bottom());
