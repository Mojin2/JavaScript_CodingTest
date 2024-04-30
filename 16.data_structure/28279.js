const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/28279.txt"; // 제출시 삭제

const readline = require("readline");
const rl = readline.createInterface({
  // input: process.stdin, // 제출시 활성화
  input: fs.createReadStream(path), // 제출시 삭제
  output: process.stdout,
});

let input = [];
let list = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.forEach((val) => {
    list.push(val.split(" ").map((el) => parseInt(el)));
  });
  solution(list);
  process.exit();
});
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
function solution(list) {
  let de = new Deque();
  de.unshift(1);
  de.unshift(2);
  console.log(de);
  // list.shift();
  // let de = new Deque();
  // let answer = [];
  // for (let i = 0; i < list.length; i++) {
  //   if (list[i][0] === 1) de.unshift(list[i][1]);
  //   if (list[i][0] === 2) de.push(list[i][1]);
  //   if (list[i][0] === 3) answer.push(de.shift());
  //   if (list[i][0] === 4) answer.push(de.pop());
  //   if (list[i][0] === 5) answer.push(de.size());
  //   if (list[i][0] === 6) answer.push(de.isEmpty());
  //   if (list[i][0] === 7) answer.push(de.front());
  //   if (list[i][0] === 8) answer.push(de.back());
  // }
  // console.log(answer.join("\n"));
}
