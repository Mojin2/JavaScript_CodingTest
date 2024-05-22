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
      this.swap(cur, minIdx);
      cur = minIdx;
      left = cur * 2;
      right = cur * 2 + 1;
    }
    return returnValue;
  }
}

// 다익스트라 이용
function solution(n, roads, sources, destination) {
  let graph = Array.from(Array(n + 1), () => []);
  roads.forEach((road) => {
    let [from, to] = road;
    graph[from].push(to);
    graph[to].push(from);
  });
  let answer = [];
  let distance = Dij(graph, destination);
  sources.forEach((source) => {
    let tmp = distance[source];
    if (tmp === Infinity) answer.push(-1);
    else answer.push(tmp);
  });
  return answer;
}

function Dij(graph, start, end) {
  let hp = new minHeap();
  let distance = Array(graph.length).fill(Infinity);
  distance[start] = 0;
  hp.push(start);

  while (hp.size() > 0) {
    let cur = hp.pop();
    for (let next of graph[cur]) {
      let tmp = distance[cur] + 1;
      if (distance[next] > tmp) {
        distance[next] = tmp;
        hp.push(next);
      }
    }
  }
  return distance;
}

let n = 3;
let roads = [
  [1, 2],
  [2, 3],
];
let sources = [2, 3];
let destination = 1;

console.log(solution(n, roads, sources, destination));
