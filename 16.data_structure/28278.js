const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/28278.txt"; // 제출시 삭제

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
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (this.items.length === 0) {
      return -1;
    }
    return this.items.pop();
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    if (this.items.length === 0) return 1;
    else return 0;
  }
  peek() {
    if (this.items.length === 0) {
      return -1;
    }
    return this.items[this.items.length - 1];
  }
}
function solution(list) {
  list.shift();
  let stack = new Stack();
  let answer = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i][0] === 1) stack.push(list[i][1]);
    if (list[i][0] === 2) answer.push(stack.pop());
    if (list[i][0] === 3) answer.push(stack.size());
    if (list[i][0] === 4) answer.push(stack.isEmpty());
    if (list[i][0] === 5) answer.push(stack.peek());
  }
  console.log(answer.join("\n"));
}
