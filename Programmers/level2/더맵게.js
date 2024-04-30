let scovile = [1, 2];
let k = 6;

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
  check(k) {
    return this.heap[1] >= k;
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
        this.swap(cur, left);
        return returnValue;
      }
    }
    while (
      this.heap[left] < this.heap[cur] ||
      this.heap[right] < this.heap[cur]
    ) {
      const minIdx = this.heap[left] > this.heap[right] ? right : left;
      this.swap(cur, minIdx);
      cur = minIdx;
      left = cur * 2;
      right = cur * 2 + 1;
    }
    return returnValue;
  }
}

function solution(scovile, k) {
  let answer = 0;
  let heap = new minHeap();
  for (sc of scovile) {
    heap.heappush(sc);
  }
  while (true) {
    if (!heap.check(k) && heap.size() === 1) return -1;
    if (heap.check(k)) return answer;

    heap.heappush(heap.heappop() + heap.heappop() * 2);
    answer++;
  }
}

console.log(solution(scovile, k));

//섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
