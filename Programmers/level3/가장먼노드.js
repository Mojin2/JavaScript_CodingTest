// 다익스트라 이용하는 문제

// 최소힙 구현
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

    while (cur > 1 && this.heap[cur] > this.heap[par]) {
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
      if (this.heap[left] < this.heap[cur]) {
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
function solution(n, edge) {
  let start = 1;
  let graph = Array.from(Array(n + 1), () => []);
  edge.forEach((el) => {
    let [from, to] = el;
    graph[from].push([to, 1]);
    graph[to].push([from, 1]);
  });
  let distance = Array(n + 1).fill(Infinity);
  distance[start] = 0;
  let queue = new minHeap();
  queue.push([start, 0]);

  while (queue.size() > 0) {
    let [cur, w] = queue.shift();

    for (nextNode of graph[cur]) {
      let [next, weight] = nextNode;
      let tmp = distance[cur] + weight;
      if (distance[next] > tmp) {
        distance[next] = tmp;
        queue.push([next, distance[next]]);
      }
    }
  }
  for (let i = 0; i < distance.length; i++) {
    if (distance[i] === Infinity) distance[i] = -1;
  }
  let max = Math.max(...distance);
  return distance.filter((v) => v === max).length;
}

let n = 6;
let edge = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];

console.log(solution(n, edge));
