let dir = __dirname + "/1504.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const line = require("fs").readFileSync(path, "utf-8");
let input = line.trim().split("\n");
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

  shift() {
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

// options
let [V, E] = input.shift().split(" ").map(Number);
let target = input.pop().split(" ").map(Number);
input = input.map((el) => el.split(" ").map(Number));
let graph = Array.from(Array(V + 1), () => []);
input.forEach((el) => {
  let [from, to, weight] = el;
  graph[from].push([to, weight]);
  graph[to].push([from, weight]);
});

function dij(start) {
  let distance = Array(V + 1).fill(Infinity);
  let visited = Array(V + 1).fill(0);
  visited[0] = 1;
  distance[start] = 0;

  let queue = new MinHeap();
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
  return distance;
}

let resStart = dij(1);
let resV1 = dij(target[0]);
let resV2 = dij(target[1]);

let result = Math.min(
  resStart[target[0]] + resV1[target[1]] + resV2[V],
  resStart[target[1]] + resV2[target[0]] + resV1[V]
);

if (result === Infinity) {
  console.log(-1);
} else {
  console.log(result);
}
