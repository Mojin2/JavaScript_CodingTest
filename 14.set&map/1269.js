const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1269.txt"; // 제출시 삭제

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
  const [n, m] = list[0];
  let a = list[1];
  let b = list[2];
  let setA = new Set(a);
  let setB = new Set(b);
  let union = new Set(a.concat(b));
  let intersection = new Set([...setA].filter((el) => setB.has(el)));
  let answer = new Set([...union].filter((el) => !intersection.has(el)));

  console.log(answer.size);
}
