let dir = __dirname + "/1753.txt";
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

const [V, E] = input.shift().split(" ").map(Number);
const start = +input.shift();
input = input.map((el) => el.split(" ").map(Number));

let graph = Array.from(Array(V + 1), () => []);
input.forEach((el) => {
  let [from, to, weight] = el;
  graph[from].push([to, weight]);
});

let distance = Array(V + 1).fill(Infinity);
let visited = Array(V + 1).fill(0);
visited[0] = 1;
distance[start] = 0;

// let queue = new Minheap();
// queue.push([start, 0]);
// while (queue.size() > 0) {
//   console.log(queue);
//   let [cur, w] = queue.shift();

//   for (nextNode of graph[cur]) {
//     let [next, weight] = nextNode;
//     let tmp = distance[cur] + weight;
//     if (distance[next] > tmp) {
//       distance[next] = tmp;
//       queue.push([next, distance[next]]);
//     }
//   }
// }
// console.log(distance);
let queue = new minHeap();
queue.heappush(1);
queue.heappush(2);
queue.heappush(3);
console.log(queue);
console.log(queue.heappop());
console.log(queue);
console.log(queue.heappop());
console.log(queue);
console.log(queue.heappop());
console.log(queue);
