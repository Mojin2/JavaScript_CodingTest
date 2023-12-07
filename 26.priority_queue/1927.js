class minHeap {
  constructor() {
    this.heap = [null];
  }
  size() {
    return this.heap.lnegth - 1;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  isEmpty() {
    if (this.heap.length === 1) return true;
  }
  heappush(data) {
    this.heap.push(data);
    let curIdx = this.heap.length - 1;
    let parIdx = parseInt(curIdx / 2);

    while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = parseInt(curIdx / 2);
    }
  }
  heappop() {
    const min = this.heap[1];
    if (this.heap.length === 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = leftIdx + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    while (
      this.heap[leftIdx] < this.heap[curIdx] ||
      this.heap[rightIdx] < this.heap[curIdx]
    ) {
      const minIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = leftIdx + 1;
    }
    return min;
  }
}
const path = __dirname + "/1927.txt"; // 제출시 삭제
const [N, ...rest] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");
const array = rest.map(Number);
solution(array);
function solution(array) {
  let heap = new minHeap();

  let answer = [];
  array.forEach((el) => {
    if (el === 0) {
      if (heap.isEmpty()) answer.push(0);
      else answer.push(heap.heappop());
    } else {
      heap.heappush(el);
    }
  });
  console.log(answer.join("\n"));
}
