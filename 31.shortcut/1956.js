let dir = __dirname + "/1956.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let [V, E] = input.shift().split(" ").map(Number);
let graph = Array.from(Array(V + 1), () => []);
input.forEach((el) => {
  let [from, to, weight] = el.split(" ").map(Number);
  graph[from].push([to, weight]);
});

// [풀이과정]
// 모든 정점에서 테스트
// 최단거리를 갱신하며 본인 자신에게 돌아온경우
// 원래 최단거리와 비교하여 최솟값을 갱신
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class Deque {
  constructor() {
    this.init();
  }
  init() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const cachedPrevFront = this.head;
      cachedPrevFront.prev = node;

      this.head = node;

      node.next = cachedPrevFront;
    }

    this.length += 1;
    return this.length;
  }

  shift() {
    if (this.length === 0) {
      return -1;
    }
    const data = this.head.data;

    if (this.length === 1) {
      this.init();
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      this.length -= 1;
    }
    return data;
  }

  push(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      const cachedPrevTail = this.tail;
      cachedPrevTail.next = node;

      node.prev = cachedPrevTail;

      this.tail = node;
    }
    this.length += 1;
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return -1;
    }

    const data = this.tail.data;

    if (this.length === 1) {
      this.init();
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length -= 1;
    }
    return data;
  }

  size() {
    return this.length;
  }
  isEmpty() {
    if (this.length === 0) {
      return 1;
    } else {
      return 0;
    }
  }
  front() {
    if (this.length === 0) {
      return -1;
    } else {
      return this.head.data;
    }
  }
  back() {
    if (this.length === 0) {
      return -1;
    } else {
      return this.tail.data;
    }
  }
}
let visited = Array(V + 1).fill(false);
let answer = Number.MAX_SAFE_INTEGER;
for (let start = 1; start <= V; start++) {
  let queue = new Deque();
  queue.push([start, 0]);
  let distance = Array(V + 1).fill(Infinity);

  function BFS(start) {
    visited[start] = 1;
    distance[start] = 0;
    let minCycle = Number.MAX_SAFE_INTEGER;
    while (queue.length > 0) {
      let [cur, curDistance] = queue.shift();

      for (nextNode of graph[cur]) {
        let [next, nextDistance] = nextNode;
        if (next === start) {
          let tmp = distance[cur] + nextDistance;
          minCycle = Math.min(minCycle, tmp);
        }
        if (distance[next] > distance[cur] + nextDistance) {
          distance[next] = distance[cur] + nextDistance;
          queue.push([next, distance[next]]);
        }
      }
    }
    return minCycle;
  }

  let minCycle = BFS(start);
  answer = Math.min(answer, minCycle);
  graph[start] = [];
}
if (answer === Number.MAX_SAFE_INTEGER) {
  console.log(-1);
} else {
  console.log(answer);
}
