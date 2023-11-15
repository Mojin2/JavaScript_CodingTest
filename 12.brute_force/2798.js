const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/2798.txt"; // 제출시 삭제

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
function solution(list) {
  let N = list[0][0];
  let M = list[0][1];
  let cards = list[1];
  let array = [];
  for (let i = 0; i < cards.length - 2; i++) {
    for (let j = i + 1; j < cards.length - 1; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        array.push(cards[i] + cards[j] + cards[k]);
      }
    }
  }
  array = array.sort((a, b) => a - b);
  array = array.filter((el) => el <= M);
  console.log(array[array.length - 1]);
}
