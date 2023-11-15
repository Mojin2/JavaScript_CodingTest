const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1316.txt"; // 제출시 삭제

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

function checkGroup(string) {
  let alpabet = Array(26)
    .fill(0)
    .map((el, index) => String.fromCharCode(index + 97));
  string = string.split(""); // ["h","a","p","p","y"]
  let prev_char = "";
  for (let i = 0; i < string.length; i++) {
    let cur_char = string[i];
    if (prev_char !== cur_char) {
      if (alpabet.includes(cur_char)) {
        alpabet[cur_char.charCodeAt() - 97] = 0;
        prev_char = cur_char;
        continue;
      } else if (alpabet[cur_char.charCodeAt() - 97] === 0) {
        return false;
      }
    } else if (prev_char === cur_char) {
      continue;
    }
  }
  return true;
}

function solution(list) {
  let n = parseInt(list[0]);
  let count = 0;
  list.shift();
  for (let i = 0; i < list.length; i++) {
    if (checkGroup(list[i])) {
      count += 1;
    }
  }
  console.log(count);
}
