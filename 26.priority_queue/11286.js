let dir = __dirname + "/11286.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [N, ...options] = input;

class AbsHeap {
  constructor() {
    this.heap = [];
  }
  // 비어있는 경우
  empty() {
    if (this.heap.length === 0) {
      return true;
    }
    return false;
  }

  // 삽입하는 경우
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (
        Math.abs(this.heap[parentIndex]) < Math.abs(this.heap[currentIndex])
      ) {
        break;
      }
      if (
        Math.abs(this.heap[parentIndex]) === Math.abs(this.heap[currentIndex])
      ) {
        if (this.heap[parentIndex] <= this.heap[currentIndex]) {
          break;
        }
      }
      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];

      currentIndex = parentIndex;
    }
  }

  // 삭제하는 경우
  delete() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);

    return max;
  }

  sinkDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    const length = this.heap.length;
    let absSmallestIndex = index;

    if (
      leftIndex < length &&
      Math.abs(this.heap[leftIndex]) < Math.abs(this.heap[absSmallestIndex])
    ) {
      absSmallestIndex = leftIndex;
    }

    if (
      leftIndex < length &&
      Math.abs(this.heap[leftIndex]) === Math.abs(this.heap[absSmallestIndex])
    ) {
      if (this.heap[leftIndex] < this.heap[absSmallestIndex]) {
        absSmallestIndex = leftIndex;
      }
    }

    if (
      rightIndex < length &&
      Math.abs(this.heap[rightIndex]) < Math.abs(this.heap[absSmallestIndex])
    ) {
      absSmallestIndex = rightIndex;
    }

    if (
      rightIndex < length &&
      Math.abs(this.heap[rightIndex]) === Math.abs(this.heap[absSmallestIndex])
    ) {
      if (this.heap[rightIndex] < this.heap[absSmallestIndex]) {
        absSmallestIndex = rightIndex;
      }
    }

    if (absSmallestIndex !== index) {
      [this.heap[index], this.heap[absSmallestIndex]] = [
        this.heap[absSmallestIndex],
        this.heap[index],
      ];
      this.sinkDown(absSmallestIndex);
    }
  }
}

let answer = [];
const maxHeap = new AbsHeap();
options.forEach((v) => {
  if (v === 0) {
    if (maxHeap.empty()) {
      answer.push(0);
    } else {
      answer.push(maxHeap.delete());
    }
  } else {
    maxHeap.insert(v);
  }
});

console.log(answer.join("\n"));
