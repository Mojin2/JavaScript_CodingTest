const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/11279.txt"; // 제출시 삭제

const readline = require("readline");
const rl = readline.createInterface({
  // input: process.stdin, // 제출시 활성화
  input: fs.createReadStream(path), // 제출시 삭제
  output: process.stdout,
});

let input = [];
let list = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.forEach((val) => {
    list.push(val.split(" ").map((el) => parseInt(el)));
  });
  solution(list);
  process.exit();
});
class MaxHeap {
  constructor() {
    this.heap = [null];
  }
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const tmp = this.heap[parentIndex];
      this.heap[parentIndex] = this.heap[currentIndex];
      this.heap[currentIndex] = tmp;
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }
  pop() {
    if (this.heap.length === 2) return this.heap.pop();

    let returnValue = this.heap[1];
    if (returnValue === undefined) return 0;
    this.heap[1] = this.heap.pop();
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      const tmp = this.heap[currentIndex];
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = tmp;
        currentIndex = rightIndex;
      } else {
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = tmp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = leftIndex + 1;
    }
    return returnValue;
  }
  empty() {
    if (this.heap.length === 1) {
      return true;
    }
    return false;
  }
}
function solution(list) {
  let [[N], ...arr] = list;
  arr = arr.reduce((acc, cur) => acc.concat(cur));
  let heap = new MaxHeap();
  let answer = "";
  arr.forEach((el) => {
    if (el === 0) {
      if (heap.empty()) {
        answer += 0 + "\n";
      } else {
        answer += heap.pop() + "\n";
      }
    } else {
      heap.push(el);
    }
  });
  console.log(answer);
}
