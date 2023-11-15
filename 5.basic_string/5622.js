const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/5622.txt"; // 제출시 삭제

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
  list = input.split(" ");
  solution(list);
  process.exit();
});

const number = {
  2: ["A", "B", "C"],
  3: ["D", "E", "F"],
  4: ["G", "H", "I"],
  5: ["J", "K", "L"],
  6: ["M", "N", "O"],
  7: ["P", "Q", "R", "S"],
  8: ["T", "U", "V"],
  9: ["W", "X", "Y", "Z"],
};
function solution(list) {
  let time = 0;
  list = list[0].split("");
  for (let i = 0; i < list.length; i++) {
    for (let key in number) {
      if (number[key].includes(list[i])) {
        time += parseInt(key) + 1;
      }
    }
  }
  console.log(time);
}
