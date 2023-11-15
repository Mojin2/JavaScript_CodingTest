const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/18258.txt"; // 제출시 삭제

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
    list.push(val.split(" "));
  });
  solution(list);
  process.exit();
});
class Queue {
  constructor() {
    this.arr = [];
  }
  push(item) {
    this.arr.push(item);
  }
  pop() {
    if (this.arr.length <= 0) return -1;
    else return this.arr.shift();
  }
  size() {
    return this.arr.length;
  }
  empty() {
    if (this.arr.length === 0) return 1;
    else return 0;
  }
  front() {
    if (this.arr.length === 0) return -1;
    else return this.arr[0];
  }
  back() {
    if (this.arr.length === 0) return -1;
    else return this.arr[this.arr.length - 1];
  }
}
function solution(list) {
  list.shift();
  let answer = "";
  let queue = new Queue();
  for (let i = 0; i < list.length; i++) {
    if (list[i][0] === "push") {
      let num = Number(list[i][1]);
      queue.push(num);
    }
    if (list[i][0] === "pop") {
      answer += queue.pop() + "\n";
    }
    if (list[i][0] === "size") {
      answer += queue.size() + "\n";
    }
    if (list[i][0] === "empty") {
      answer += queue.empty() + "\n";
    }
    if (list[i][0] === "front") {
      answer += queue.front() + "\n";
    }
    if (list[i][0] === "back") {
      answer += queue.back() + "\n";
    }
  }
  console.log(answer);
}
