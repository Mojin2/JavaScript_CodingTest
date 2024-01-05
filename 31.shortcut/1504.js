let dir = __dirname + "/1504.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const line = require("fs").readFileSync(path, "utf-8");
let input = line.trim().split("\n");
class minHeap {
  constructor() {
    this.heap = [null];
  }
  size() {
    return this.heap.length - 1;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  heappush(data) {
    this.heap.push(data);
    let curIdx = this.heap.length - 1;
    let parIdx = parseInt(curIdx / 2);

    while (curIdx > 1) {
      if (this.heap[curIdx][1] < this.heap[parIdx][1]) {
        this.swap(parIdx, curIdx);
        curIdx = parIdx;
        parIdx = parseInt(curIdx / 2);
      } else {
        break;
      }
    }
  }
  heappop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = leftIdx + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx][1] < this.heap[curIdx][1]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    while (
      leftIdx < this.size() &&
      (this.heap[leftIdx][1] < this.heap[curIdx][1] ||
        this.heap[rightIdx][1] < this.heap[curIdx][1])
    ) {
      const minIdx =
        this.heap[leftIdx][1] > this.heap[rightIdx][1] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = leftIdx + 1;
    }
    return min;
  }
}

// options
let [V, E] = input.shift().split(" ").map(Number);
let must = input[input.length - 1].split(" ").map(Number);
let graph = Array.from(Array(V + 1), () => []);
for (let i = 0; i < E; i++) {
  let [from, to, weight] = input[i].split(" ").map(Number);
  graph[from].push([to, weight]);
  graph[to].push([from, weight]);
}

// distance
let distance = Array(V + 1).fill(Infinity);
let visited = Array(V + 1).fill(false);

// bfs
distance[1] = 0;
let pq = new minHeap();
pq.heappush([1, 0]);

while (pq.heap.length > 1) {
  const [curNode, dist] = pq.heappop();
  if (visited[curNode]) continue;
  visited[curNode] = true;
  for (let [nextNode, nextDistance] of graph[curNode]) {
    if (distance[nextNode] > distance[curNode] + nextDistance) {
      distance[nextNode] = distance[curNode] + nextDistance;
      pq.heappush([nextNode, distance[nextNode]]);
    }
  }
}

console.log(distance);
