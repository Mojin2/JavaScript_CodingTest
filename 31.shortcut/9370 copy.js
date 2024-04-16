let dir = __dirname + "/9370.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

class PriorityQueue {
  constructor(compare) {
    this.heap = [];
    this.compare = compare;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  top() {
    return this.heap[0];
  }

  push(data) {
    this.heap.push(data);
    this.heapifyUp();
  }

  heapifyUp() {
    let ci = this.heap.length - 1;
    const cd = this.heap[ci];

    while (ci > 0) {
      const pi = Math.floor((ci - 1) / 2);
      const pd = this.heap[pi];
      if (this.compare(pd, cd)) break;
      this.heap[ci] = pd;
      ci = pi;
    }

    this.heap[ci] = cd;
  }

  pop() {
    const last = this.heap.length - 1;
    this.heap[0] = this.heap[last];
    const data = this.heap.pop();

    if (this.heap.length > 0) {
      this.heapifyDown();
    }
    return data;
  }

  heapifyDown() {
    let ci = 0;
    const cd = this.heap[ci];

    while (ci < this.heap.length) {
      const li = ci * 2 + 1;
      const ri = ci * 2 + 2;
      if (li >= this.heap.length) break;
      const ld = this.heap[li];
      const rd = ri < this.heap.length ? this.heap[ri] : null;
      const bi = rd !== null && this.compare(rd, ld) ? ri : li;
      const bd = this.heap[bi];
      if (this.compare(cd, bd)) break;
      this.heap[ci] = bd;
      ci = bi;
    }
    this.heap[ci] = cd;
  }
}

let Z = +input.shift();
for (let zz = 0; zz < Z; zz++) {
  answer = [];
  let [v, e, t] = input.shift().split(" ").map(Number);
  let [start, g, h] = input.shift().split(" ").map(Number);
  let arr = input.slice(0, e);

  // 그래프 생성
  let targets = input.slice(e, e + t).map(Number); // 도착 지점들
  let graph = Array.from(Array(v + 1), () => []);
  arr.forEach((el) => {
    let [from, to, weight] = el.split(" ").map(Number);
    graph[from].push([to, weight]);
    graph[to].push([from, weight]);
  });

  function Dij(start) {
    let queue = new PriorityQueue((a, b) => a[1] < b[1]);
    let distance = Array(v + 1).fill(Number.MAX_SAFE_INTEGER);
    distance[start] = 0;
    queue.push([start, 0]);

    while (!queue.isEmpty()) {
      let [cur, curDistance] = queue.top();
      queue.pop();

      for (nextNode of graph[cur]) {
        let [next, nextDistance] = nextNode;
        let cost = curDistance + nextDistance;
        if (distance[next] > cost) {
          distance[next] = cost;
          queue.push([next, cost]);
        }
      }
    }
    return distance;
  }
  let distStart = Dij(start);
  let distG = Dij(g);
  let distH = Dij(h);

  for (let target of targets) {
    let fromS = distStart[target];
    let gToH = distStart[g] + distG[h] + distH[target];
    let htoG = distStart[h] + distH[g] + distG[target];
    if (fromS === gToH || fromS === htoG) {
      answer.push(target);
    }
  }
  console.log(answer.sort((a, b) => a - b).join(" "));
  input = input.slice(e + t);
}
