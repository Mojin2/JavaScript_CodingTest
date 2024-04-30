const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/15649.txt"; // 제출시 삭제

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
function solution(list) {
  let N = list[0];
  let r = list[1];

  let number = Array(N)
    .fill(0)
    .map((_, idx) => idx + 1);
  let answer = [];
  const tmp = [];
  const backtrack = () => {
    if (tmp.length === r) {
      answer.push([...tmp]);
      return;
    }
    for (let i = 0; i < number.length; i++) {
      if (tmp.includes(number[i])) continue;
      tmp.push(number[i]);
      backtrack();
      tmp.pop();
    }
  };
  backtrack();
  console.log(answer);
}
