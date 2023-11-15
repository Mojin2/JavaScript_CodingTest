const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/4779.txt"; // 제출시 삭제

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

let line = "-";
let blank = " ";
function kantoa(num) {
  let result = "";
  let answer = [];
  let index = 0;
  if (num === 0) {
    return "-";
  } else {
    while (true) {
      if (index === num) {
        break;
      }
      result += line;
      result += blank;
      result += line;
      line = result;
      blank = " ";
      for (let i = 0; i < line.length - 1; i++) {
        blank += " ";
      }
      index++;
      answer.push(result);
      result = "";
    }
  }
  line = "-";
  blank = " ";
  return answer[answer.length - 1];
}

function solution(list) {
  let answer = [];
  list = list.map((el) => Number(el));
  list.forEach((el) => answer.push(kantoa(el)));
  console.log(answer.join("\n"));
}
