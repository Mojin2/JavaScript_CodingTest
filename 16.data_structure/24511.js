const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/24511.txt"; // 제출시 삭제

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
  let kind = list[1];
  let array_B = list[2];
  let insert = list[4];
  let de = new Deque();
  for (let i = 0; i < kind.length; i++) {
    if (kind[i] === 0) {
      de.unshift(array_B[i]);
    }
  }
  let answer = [];
  for (let i = 0; i < insert.length; i++) {
    de.push(insert[i]);
    answer.push(de.shift());
  }

  console.log(answer.join(" "));
}
// [1] [2] [3] [4] >> [1,4]
// [2,4,7]

// [1,4,2] >> 1 >> [4,2,1] >> 4

// first de = [1,4,2] >> [4,2] num = 1
// second de = [4,2,1] >> [2,1] num = 4
