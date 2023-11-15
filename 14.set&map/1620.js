const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1620.txt"; // 제출시 삭제

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
function solution(list) {
  const n = Number(list[0][0]);
  const m = Number(list[0][1]);
  list.shift();
  list = list.reduce((a, b) => a.concat(b));
  let dic = list.slice(0, n);
  let quiz = list.slice(n);
  let map = new Map(dic.map((el, index) => [el, index + 1]));
  quiz.forEach((el) => {
    if (Number.isNaN(+el)) console.log(map.get(el));
    else console.log(dic[+el - 1]);
  });
}
