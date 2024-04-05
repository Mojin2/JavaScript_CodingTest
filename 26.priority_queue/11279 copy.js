let dir = __dirname + "/11279.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let N = +input.shift();
let arr = input.join(" ").split(" ").map(Number);

class MaxHeap {
  constructor() {
    // index 0번은 비워두고 1번부터 시작
    this.heap = [null];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  size() {
    return this.heap.length - 1;
  }

  empty() {
    return this.size() === 0;
  }

  push(value) {
    this.heap.push(value);
    let cur = this.heap.length - 1;
    let par = Math.floor(cur / 2);

    while (par > 0 && this.heap[par] < value) {
      this.swap(cur, par);
      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  pop() {
    if (this.empty()) {
      return 0;
    }
    if (this.size() === 1) {
      return this.heap.pop();
    }
    let returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let cur = 1;
    let left = 2;
    let right = 3;

    while (
      this.heap[cur] < this.heap[left] ||
      this.heap[cur] < this.heap[right]
    ) {
      if (this.heap[left] < this.heap[right]) {
        this.swap(cur, right);
        cur = right;
      } else {
        this.swap(cur, left);
        cur = left;
      }
      left = cur * 2;
      right = cur * 2 + 1;
    }
    return returnValue;
  }
}

let maxHeap = new MaxHeap();
arr.forEach((el) => {
  if (el === 0) {
    if (maxHeap.empty()) {
      console.log(0);
    } else {
      console.log(maxHeap.pop());
    }
  } else {
    maxHeap.push(el);
  }
});
