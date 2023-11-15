const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/4134.txt"; // 제출시 삭제

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
const check = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num % 2 === 0) {
    return num === 2 ? true : false;
  }
  for (let i = 3; i <= parseInt(Math.sqrt(num)); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const check2 = (num) => {
  let tmp = Math.pow(num, 2);
  let array = Array(tmp + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i * i <= tmp; i++) {
    if (array[i]) {
      for (let j = i * i; j <= tmp; j += i) {
        array[j] = false;
      }
    }
  }
  let index = num;
  while (true) {
    if (array[index] === true) {
      console.log(index);
      break;
    } else {
      index += 1;
    }
  }
};
function solution(list) {
  list.shift();
  list = list.map((el) => Number(el));
  list.forEach((el) => {
    let num = el;
    while (true) {
      if (check(num)) {
        console.log(num);
        break;
      } else {
        num += 1;
      }
    }
  });
}
