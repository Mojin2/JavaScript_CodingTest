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
  size() {
    return this.count;
  }
  shift() {
    if (this.count === 0) return null;
    let value = this.front.value;
    if (this.count === 1) {
      this.init();
    } else {
      this.front = this.front.next;
      this.front.prev = null;
      this.count -= 1;
    }
    return value;
  }
  push(value) {
    let node = new Node(value);
    if (this.count === 0) {
      this.front = node;
      this.rear = node;
    } else {
      let cached = this.rear;
      cached.next = node;
      node.prev = cached;
      this.rear = node;
    }
    this.count++;
  }
}

function solution(x, y, n) {
  let queue = new Deque();
  queue.push([x, 0]);
  let visited = Array(y + 1).fill(0);
  visited[x] = 1;

  while (queue.size() > 0) {
    let [cur, time] = queue.shift();
    if (cur === y) {
      return time;
    }

    for (let next of [cur + n, cur * 2, cur * 3]) {
      if (next <= y && !visited[next]) {
        visited[next] = 1;
        queue.push([next, time + 1]);
      }
    }
  }
  return -1;
}

console.log(solution(10, 40, 30));
