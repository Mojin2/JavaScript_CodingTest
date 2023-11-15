// 공백포함 한줄입력
// const fs = require("fs"); // 제출시 삭제
// const path = __dirname + "/11382.txt"; // 제출시 삭제

// const readline = require("readline");
// const rl = readline.createInterface({
//   // input: process.stdin, // 제출시 활성화
//   input: fs.createReadStream(path), // 제출시 삭제
//   output: process.stdout,
// });

// let input;
// let list = [];
// rl.on("line", function (line) {
//   input = line;
// }).on("close", function () {
//   list = input.split(" ").map((el) => Number(el));
//   solution(list);
//   process.exit();
// });
// function solution(list) {
//     console.log(list);
//   }

// 공백포함 여러줄입력
// const fs = require("fs"); // 제출시 삭제
// const path = __dirname + "/14681.txt"; // 제출시 삭제

// const readline = require("readline");
// const rl = readline.createInterface({
//   // input: process.stdin, // 제출시 활성화
//   input: fs.createReadStream(path), // 제출시 삭제
//   output: process.stdout,
// });

// let input = [];
// let list = [];
// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   input.forEach((val) => {
//     list.push(val.split(" ").map((el) => parseInt(el)));
//   });
//   solution(list);
//   process.exit();
// });
// function solution(list) {
//     console.log(list);
//   }
