const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/1629.txt"; // 제출시 삭제

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
  list = input.split(" ").map((el) => Number(el));
  solution(list);
  process.exit();
});
function solution(list) {
  const [A, B, C] = list.map(BigInt);

  function pow(A, B, C) {
    if (B === 0n) {
      return 1;
    }
    if (B % 2n === 0n) {
      let tmp = BigInt(BigInt(pow(A, B / 2n, C)) % C);
      return (tmp * tmp) % BigInt(C);
    } else {
      let tmp = BigInt(BigInt(pow(A, (B - 1n) / 2n, C)) % C);
      return (A * ((tmp * tmp) % C)) % C;
    }
  }
  console.log(pow(A, B, C).toString());
}
