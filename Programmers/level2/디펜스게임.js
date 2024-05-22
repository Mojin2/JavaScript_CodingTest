class maxHeap {
  constructor() {
    this.heap = [null];
  }
  size() {
    return this.heap.length - 1;
  }
  getMax() {
    return this.heap[1] ? this.heap[1] : null;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
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
    const returnValue = this.heap[1];

    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();
    let cur = 1;
    let left = 2;
    let right = 3;

    if (!this.heap[left]) return returnValue;
    if (!this.heap[right]) {
      if (this.heap[cur] < this.heap[left]) {
        this.swap(cur, left);
      }
      return returnValue;
    }

    while (
      this.heap[left] > this.heap[cur] ||
      this.heap[right] > this.heap[cur]
    ) {
      let maxIdx = this.heap[left] < this.heap[right] ? right : left;
      this.swap(maxIdx, cur);
      cur = maxIdx;
      left = cur * 2;
      right = cur * 2 + 1;
    }
    return returnValue;
  }
}

function solution(n, k, enemy) {
  let hp = new maxHeap();
  let answer = 0;
  for (let i = 0; i < enemy.length; i++) {
    hp.push(enemy[i]);
    n -= enemy[i];
    if (n < 0) {
      if (k === 0 || n + hp.getMax() < 0) return answer;
      k--;
      n += hp.pop();
    }
    answer++;
  }
  return answer;
}
let n = 1;
let k = 1;
let enemy = [1, 5, 1, 2];

console.log(solution(n, k, enemy));
