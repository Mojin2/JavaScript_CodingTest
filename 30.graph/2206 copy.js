let dir = __dirname + "/2206.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let board = input.map((el) => el.split("").map(Number));

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  push(data) {
    let node = new Node(data);
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      let cur = this.rear;
      cur.next = node;
      this.rear = node;
    }
    this.size++;
  }
  shift() {
    if (this.isEmpty()) return;
    let returnValue = this.front;
    this.front = this.front.next;
    this.size--;

    return returnValue.data;
  }
}
function BFS() {
  let visited = Array.from(Array(N), () =>
    Array.from(Array(M), () => Array(2).fill(0))
  );

  let queue = new Queue();
  queue.push([0, 0, 0, 1]); // [x,y,isBreak,time]

  while (!queue.isEmpty()) {
    let [x, y, isBreak, time] = queue.shift();
    if (x === N - 1 && y === M - 1) {
      console.log(visited);

      return time;
    }

    let tmp = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ].filter(
      (el) => el[0] >= 0 && el[0] <= N - 1 && el[1] >= 0 && el[1] <= M - 1
    );

    for ([nx, ny] of tmp) {
      if (visited[nx][ny][isBreak]) continue;
      if (board[nx][ny] && !isBreak) {
        // board[nx][ny] = 1 , isBreak = 0
        // 부수는 경우
        queue.push([nx, ny, isBreak + 1, time + 1]);
        visited[nx][ny][isBreak + 1] = 1;
      }
      if (!board[nx][ny] && !visited[nx][ny][isBreak]) {
        // board[nx][ny] = 0
        // 안부수는 경우
        queue.push([nx, ny, isBreak, time + 1]);
        visited[nx][ny][isBreak] = 1;
      }
    }
  }

  return -1;
}
console.log(BFS());
