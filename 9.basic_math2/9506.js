const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/9506.txt"; // 제출시 삭제

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
  let array = list.reduce((acc, cur) => acc.concat(cur));
  array.pop();
  let n = array.length;
  for (let i = 0; i < n; i++) {
    let number = array[i];
    let arr = [];
    for (let k = 1; k <= number; k++) {
      if (number % k === 0) {
        arr.push(k);
      }
    }
    arr.pop();

    if (number === arr.reduce((acc, cur) => acc + cur)) {
      console.log(number, "=", arr.join(" + "));
    } else {
      console.log(number, "is NOT perfect.");
    }
  }
}
