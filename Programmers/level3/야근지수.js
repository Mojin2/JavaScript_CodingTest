class maxHeap {
  constructor() {
    this.heap = [null];
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  sum() {
    let sum = 0;
    for (let i = 1; i < this.heap.length; i++) {
      sum += Math.pow(this.heap[i], 2);
    }
    return sum;
  }

  size() {
    return this.heap.length - 1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  push(value) {
    this.heap.push(value);
    let cur = this.heap.length - 1;
    let par = Math.floor(cur / 2);

    while (cur > 1 && this.heap[cur] > this.heap[par]) {
      this.swap(cur, par);
      cur = par;
      par = Math.floor(cur / 2);
    }
  }
  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    let returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();
    let cur = 1;
    let left = 2;
    let right = 3;
    if (this.heap[left] === undefined) return returnValue;
    if (this.heap[right] === undefined) {
      if (this.heap[left] > this.heap[cur]) {
        this.swap(left, cur);
      }
      return returnValue;
    }

    while (
      this.heap[left] !== undefined &&
      this.heap[right] !== undefined &&
      (this.heap[left] > this.heap[cur] || this.heap[right] > this.heap[cur])
    ) {
      let maxIdx = this.heap[left] > this.heap[right] ? left : right;
      this.swap(maxIdx, cur);
      cur = maxIdx;
      left = cur * 2;
      right = cur * 2 + 1;
    }
    return returnValue;
  }
}

function solution(n, works) {
  let heap = new maxHeap();
  for (let i = 0; i < works.length; i++) {
    heap.push(works[i]);
  }
  let count = n;
  while (count > 0) {
    let value = heap.pop();
    if (value === 0) {
      heap.push(value);
      count--;
    } else {
      heap.push(value - 1);
      count--;
    }
  }

  return heap.sum();
}
let n = 5;
let works = [1, 1, 1, 1, 1];

console.log(solution(n, works));
