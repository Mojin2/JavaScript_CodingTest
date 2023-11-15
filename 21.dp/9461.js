const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/9461.txt"; // 제출시 삭제

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

let array = [1, 1, 1];
function pado(num) {
  if (num <= 3) {
    return array[num - 1];
  } else {
    for (let i = 4; i <= num; i++) {
      array[i - 1] = array[i - 3] + array[i - 4];
    }
    return array[num - 1];
  }
}
function solution(list) {
  list = list.slice(1);
  list = list.reduce((acc, cur) => acc.concat(cur));
  let answer = [];
  list.forEach((el) => answer.push(pado(el)));
  console.log(answer.join("\n"));
}

//[1,1,1,2,2,3,4,5,7,9]
