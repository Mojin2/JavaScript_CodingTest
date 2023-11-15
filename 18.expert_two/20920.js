const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/20920.txt"; // 제출시 삭제

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
  const m = Number(list[0].split(" ")[1]);
  list = list.slice(1);
  list = list.filter((el) => el.length >= m);

  // 자주 나오는 순 >> 길이가 긴 순서 >> 알바벳 사전순
  let counts = list.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  let result = [];
  for (let key in counts) {
    result.push([key, counts[key]]);
  }
  let sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map((el) => el[0]);
  ///////////////////////
  sorted = sorted.sort((a, b) => {
    if (counts[a] === counts[b]) {
      if (a.length === b.length) {
        if (a < b) return -1;
        if (a > b) return 1;
        if (a === b) return 0;
      } else {
        return b.length - a.length;
      }
    }
  });

  console.log(sorted.join("\n"));
}
