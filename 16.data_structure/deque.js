class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.init();
  }
  init() {
    this.count = 0;
    this.front = null;
    this.rear = null;
  }
  unshift(value) {
    // 앞에 추가
    const node = new Node(value);
    if (this.count === 0) {
      this.front = node;
      this.rear = node;
      this.count++;
    } else {
      let cachedNode = this.front;
      this.front = node;
      node.next = cachedNode;
      cachedNode.prev = node;
      this.count++;
    }
  }
  shift() {
    // 앞에 제거
    if (this.count === 0) return null;
    let returnValue = this.front.value;
    if (this.count === 1) {
      this.init();
    } else {
      this.front = this.front.next;
      this.front.prev = null;
      this.count--;
    }
    return returnValue;
  }
}

let de = new Deque();
de.unshift(1);
de.unshift(2);
de.shift();
de.unshift(3);
console.log(de);
