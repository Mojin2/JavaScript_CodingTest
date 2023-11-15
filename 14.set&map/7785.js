const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/7785.txt"; // 제출시 삭제

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
  list.shift();
  let set = new Set();
  for (let i = 0; i < n; i++) {
    if (set.has(list[i][0])) {
      set.delete(list[i][0]);
    } else {
      set.add(list[i][0]);
    }
  }
  let array = Array.from(set);
  array = array.sort().reverse();
  console.log(array.join("\n"));

  //   array = array.sort((a, b) => {
  //     let first = a;
  //     let second = b;
  //     let firLen = first.length;
  //     let seLen = second.length;
  //     let min = Math.min(firLen, seLen);
  //     for (let i = 0; i < min; i++) {
  //       if (first[i] === second[i]) {
  //         continue;
  //       } else {
  //         return first[i].charCodeAt() > second[i].charCodeAt()
  //           ? -1
  //           : first[i].charCodeAt() < second[i].charCodeAt()
  //           ? 1
  //           : 0;
  //       }
  //     }
  //   });
}
