class minHeap {
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
  push(value) {
    this.heap.push(value);
    let cur = this.heap.length - 1;
    let par = Math.floor(cur / 2);

    while (cur > 1 && this.heap[cur] < this.heap[par]) {
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

    if (!this.heap[left]) return returnValue;
    if (!this.heap[right]) {
      if (this.heap[cur] > this.heap[left]) {
        this.swap(left, cur);
      }
      return returnValue;
    }
    while (
      this.heap[left] < this.heap[cur] ||
      this.heap[right] < this.heap[cur]
    ) {
      let minIdx = this.heap[left] > this.heap[right] ? right : left;
      this.swap(minIdx, cur);
      cur = minIdx;
      left = cur * 2;
      right = cur * 2 + 1;
    }
    return returnValue;
  }
}
class maxHeap {
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

    if (!this.heap[left]) return returnValue;
    if (!this.heap[right]) {
      if (this.heap[cur] < this.heap[left]) {
        this.swap(left, cur);
      }
      return returnValue;
    }
    while (
      this.heap[left] > this.heap[cur] ||
      this.heap[right] > this.heap[cur]
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

function solution(operations) {
  let minh = new minHeap();
  let maxh = new maxHeap();
  let dic = {};
  operations.forEach((operation) => {
    let [op, num] = operation.split(" ").map((el, idx) => {
      if (idx === 1) return Number(el);
      else return el;
    });
    if (op === "I") {
      minh.push(num);
      maxh.push(num);
      dic[num] = (dic[num] || 0) + 1;
    } else if (op === "D") {
      if (num === 1) {
        ////
        while (true) {
          let tmp = maxh.pop();
          if (dic[tmp] >= 1) {
            dic[tmp] -= 1;
            break;
          }
          if (tmp === null) break;
        }
      } else {
        ////
        while (true) {
          let tmp = minh.pop();
          if (dic[tmp] >= 1) {
            dic[tmp] -= 1;
            break;
          }
          if (tmp === null) break;
        }
      }
    }
  });
  let answer = Object.entries(dic)
    .filter((v) => v[1] >= 1)
    .map((el) => Number(el[0]));
  if (answer.length === 0) return [0, 0];
  else return [Math.max(...answer), Math.min(...answer)];
}

let operations = [
  "I -45",
  "I 653",
  "D 1",
  "I -642",
  "I 45",
  "I 97",
  "D 1",
  "D -1",
  "I 333",
];
console.log(solution(operations));
