class Minheap {
  constructor() {
    this.heap = [null];
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  size() {
    return this.length - 1;
  }

  isEmpty() {
    return this.size() === 0;
  }

  heappush(value) {
    // 값을 추가
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
    // 최솟값 추출
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
      }
      return returnValue;
    }

    while (
      this.heap[cur] > this.heap[left] ||
      this.heap[cur] > this.heap[right]
    ) {
      let minIdx = this.heap[left] > this.heap[right] ? right : left;
      this.swap(cur, minIdx);
      cur = minIdx;
      left = cur * 2;
      right = cur * 2 + 1;
    }
    return returnValue;
  }
}
