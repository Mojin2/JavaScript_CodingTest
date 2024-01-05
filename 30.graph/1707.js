let dir = __dirname + "/1707.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

class Node {
  constructor(nodeName) {
    this.nodeName = nodeName;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push(nodeName, nodeColor) {
    let node = new Node(nodeName, nodeColor);
    if (this.size === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }
  shift() {
    let temp = this.head;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return temp;
  }
  length() {
    return this.size;
  }
}

let K = Number(input.shift());
let array = [];

for (let i = 0; i < input.length; i++) {
  let [V, E] = input[i].split(" ").map(Number);
  let tmp = [];
  for (let j = i + 1; j < i + E + 1; j++) {
    let data = input[j].split(" ").map(Number);
    tmp.push(data);
  }
  array.push([[V, E], ...tmp]);
  i += E;
}
array.forEach((el) => {
  let [[V, E], ...arr] = el;
  solution(V, E, arr);
});

function solution(V, E, arr) {
  let graph = Array.from(Array(V + 1), () => []);
  arr.forEach((el) => {
    let [from, to] = el;
    graph[from].push(to);
    graph[to].push(from);
  });
  let visited = Array(V + 1).fill(0);

  for (let i = 1; i <= V; i++) {
    if (!visited[i]) {
      BFS(i, graph, visited);
    }
  }

  for (let i = 1; i < graph.length; i++) {
    let cur = visited[i];
    for (let j = 0; j < graph[i].length; j++) {
      let next = visited[graph[i][j]];
      if (cur === next) {
        console.log("NO");
        return;
      }
    }
  }
  console.log("YES");
}
function BFS(startNode, graph, visited) {
  let check = 1;
  let queue = new Queue();
  queue.push(startNode);
  visited[startNode] = check;

  while (queue.length() !== 0) {
    let temp = queue.shift();
    let cur = temp.nodeName;

    if (visited[cur] === 1) check = 2;
    else if (visited[cur] === 2) check = 1;

    for (let next of graph[cur]) {
      if (!visited[next]) {
        visited[next] = check;
        queue.push(next);
      } else if (visited[cur] === visited[next]) {
        return;
      }
    }
  }
}
