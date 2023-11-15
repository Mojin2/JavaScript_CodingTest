const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/22732.txt"; // 제출시 삭제

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
  let first = list.slice(0, 3);
  let second = list.slice(3);
  let first_answer = [];
  let second_answer = [];
  let answer = [];
  let x = -999;
  let y = -999;

  for (let i = x; i <= 999; i++) {
    for (let j = y; j <= 999; j++) {
      let answer_one = first[0] * i + first[1] * j;
      let answer_two = second[0] * i + second[1] * j;
      if (first[2] === answer_one && second[2] === answer_two) {
        answer.push(i, j);
      }
    }
  }
  console.log(answer.join(" "));
}
