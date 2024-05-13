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

    while (cur > 1 && this.heap[cur][1] < this.heap[par][1]) {
      this.swap(cur, par);
      cur = par;
      par = Math.floor(cur / 2);
    }
  }
  shift() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    let returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();
    let cur = 1;
    let left = 2;
    let right = 3;

    if (!this.heap[left]) return returnValue;
    if (!this.heap[right]) {
      if (this.heap[left][1] < this.heap[cur][1]) {
        this.swap(left, cur);
      }
      return returnValue;
    }
    while (
      this.heap[left][1] < this.heap[cur][1] ||
      this.heap[right][1] < this.heap[cur][1]
    ) {
      let minIdx = this.heap[left][1] > this.heap[right][1] ? right : left;
      this.swap(minIdx, cur);
      cur = minIdx;
      left = cur * 2;
      right = cur * 2 + 1;

      if (left >= this.size()) break;
    }
    return returnValue;
  }
}

function solution(jobs) {
  let n = jobs.length;
  jobs = jobs.sort((a, b) => a[0] - b[0]);
  let queue = new minHeap();
  let cur = [];
  let time = 0;
  let sum = 0;

  while (true) {
    // console.log(time);
    //  종료 조건
    if (!jobs.length && !cur.length && !queue.size()) break;
    // 대기 시작 시간에 맞는 작업들 대기 큐에 추가
    while (jobs.length) {
      if (jobs[0][0] === time) {
        queue.push(jobs.shift());
        console.log(queue);
      } else break;
    }
    // 현재 큐의 작업이 완료되면 제거
    if (cur.length) {
      cur[0][1] -= 1;
      sum += 1;
      if (cur[0][1] === 0) {
        cur.pop();
      }
    }
    // 현재 큐가 비어있으면 대기 큐들 중 하나 추가
    if (!cur.length && queue.size()) {
      //   console.log(queue);
      cur.push(queue.shift());
    }
    if (queue.size()) {
      sum += queue.size();
    }
    time++;
  }
  return Math.floor(sum / n);
}

let jobs = [
  [0, 3],
  [0, 2],
  [1, 1],
  [1, 2],
  [10, 1],
  [11, 100],
  [1, 5],
];

console.log(solution(jobs));
