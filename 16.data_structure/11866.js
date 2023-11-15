const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/11866.txt"; // 제출시 삭제

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
  list = input.split(" ").map((el) => Number(el));
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
  const n = list[0];
  const k = list[1];
  let index = 1;
  let queue = new Queue();
  let answer = [];
  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }
  while (true) {
    if (queue.length === 0) {
      break;
    }
    for (let i = 0; i < k; i++) {
      if (i === k - 1) {
        answer.push(queue.pop());
      } else {
        let tmp = queue.pop();
        queue.push(tmp);
      }
    }
  }
  console.log(`<${answer.join(", ")}>`);
}
