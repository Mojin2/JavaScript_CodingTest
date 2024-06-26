let dir = __dirname + "/1927.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let N = +input.shift();
let arr = input.join(" ").split(" ").map(Number);

class MinHeap {
  constructor() {
    this.heap = [null];
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  size() {
    return this.heap.length - 1;
  }
  isEmpty() {
    return this.size() === 0;
  }

  heappush(value) {
    this.heap.push(value);
    let cur = this.heap.length - 1;
    let par = Math.floor(cur / 2);

    while (cur > 1 && this.heap[cur] < this.heap[par]) {
      this.swap(cur, par);
      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  heappop() {
    if (this.size() === 0) {
      return null; // Return null for an empty heap
    }
    if (this.size() === 1) {
      return this.heap.pop();
    }
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let cur = 1;
    let left = 2;
    let right = 3;

    // 왼쪽 자식이 없는 경우 오른쪽 자식도 없음 > root노트가 최소
    if (!this.heap[left]) return returnValue;
    // 오른쪽 자식이 없는 경우 루트와 왼쪽 자식 값을 비교
    if (!this.heap[right]) {
      if (this.heap[left] < this.heap[cur]) {
        this.swap(left, cur);
      }
      return returnValue;
    }
    // 위 두 조건에 걸리지 않았다면 왼쪽과 오른쪽 자식 모두 보유
    while (
      this.heap[left] < this.heap[cur] ||
      this.heap[right] < this.heap[cur]
    ) {
      // 왼쪽과 오른쪽 자식 중에 더 작은 값과 현재 노드를 교체하면 된다.
      const minIdx = this.heap[left] > this.heap[right] ? right : left;
      this.swap(minIdx, cur);
      cur = minIdx;
      left = cur * 2;
      right = cur * 2 + 1;
    }

    return returnValue;
  }
}

let minHeap = new MinHeap();
let answer = [];
arr.forEach((el) => {
  if (el === 0) {
    if (minHeap.isEmpty()) answer.push(0);
    else answer.push(minHeap.heappop());
  } else {
    minHeap.heappush(el);
  }
});
console.log(answer.join("\n"));
