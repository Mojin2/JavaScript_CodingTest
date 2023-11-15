const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1152.txt"; // 제출시 삭제

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
  list = input;
  solution(list);
  process.exit();
});
function solution(list) {
  if (list[0] === " ") {
    if (list.length === 1) {
      console.log(0);
      return;
    }
    for (let i = 0; i < list.length; i++) {
      if (list[i] !== " ") {
        break;
      }
      if (list[i] === " ") {
        list = list.substr(i + 1);
        i--;
      }
    }
    list = list.replace(/ +/g, " ");
    console.log(list.trim().split(" ").length);
  } else {
    list = list.replace(/ +/g, " ");
    console.log(list.trim().split(" ").length);
  }
}
