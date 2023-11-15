const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2164.txt"; // 제출시 삭제

const readline = require("readline");
const rl = readline.createInterface({
  // input: process.stdin, // 제출시 활성화
  input: fs.createReadStream(path), // 제출시 삭제
  output: process.stdout,
});

let input;
let list = [];
rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  list = input;
  solution(list);
  process.exit();
});
class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head === null) {
      this.head = node;
      this.head.next = null;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length += 1;
  }

  pop() {
    if (!this.head) {
      return false;
    }
    const data = this.head.item;
    this.head = this.head.next;
    this.length -= 1;
    return data;
  }
  size() {
    return this.length;
  }
}
function solution(list) {
  const n = list;
  let arr = new Queue();
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  while (true) {
    if (arr.size() === 1) {
      console.log(arr.head.item);
      break;
    }
    arr.pop();
    let num = arr.pop();
    arr.push(num);
  }
}
