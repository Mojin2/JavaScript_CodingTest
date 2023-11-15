const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1764.txt"; // 제출시 삭제

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
    list.push(val);
  });
  solution(list);
  process.exit();
});
function solution(list) {
  const [n, m] = list[0].split(" ").map((el) => Number(el));
  list.shift();
  let listen = new Set(list.slice(0, n));
  let see = new Set(list.slice(n));
  let intersection = Array.from(
    new Set([...listen].filter((el) => see.has(el)))
  ).sort();
  console.log(intersection.length);
  console.log(intersection.join("\n"));
}
