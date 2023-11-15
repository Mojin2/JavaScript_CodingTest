/////////////메모리 초과////////////
const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2346.txt"; // 제출시 삭제

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
  const n = list[0][0];
  let arr = list[1];
  let de = new Deque(); // [1,2,3,4,5]
  for (let i = 1; i <= n; i++) {
    de.push(i);
  }
  let answer = [];
  while (true) {
    if (de.size() === 0) {
      break;
    }
    let number = de.shift();
    if (number === -1) {
      break;
    }
    answer.push(number);
    let times = arr[number - 1];
    let idx = Math.abs(times);
    times > 0 ? (idx -= 1) : (idx = idx);
    for (let i = 0; i < idx; i++) {
      if (times > 0) {
        let tmp = de.shift();
        de.push(tmp);
      } else {
        let tmp = de.pop();
        de.unshift(tmp);
      }
    }
  }
  console.log(answer);
}

// arr = [3,2,1,-3,-1] , de = [1,2,3,4,5]
// answer = [1] de = [2,3,4,5] >> [4,5,2,3]
// answer = [1,4] de = [5,2,3] >> [5,2,3]
// amswer = [1,4,5] de = [2,3] >> [3,2]
// answer = [1,4,5,3] de = [2] >> [2]
