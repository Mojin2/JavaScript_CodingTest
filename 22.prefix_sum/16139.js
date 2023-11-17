const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/16139.txt"; // 제출시 삭제

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
  let string = list[0][0];
  let n = Number(list[1][0]);
  let question = list.slice(2);
  //   let [string,n,...question] = list;
  console.log(list);
  let dp = {};
  let result = [];
  let input = [];
  question.forEach((el) => {
    let tmp = el;
    tmp[1] = +tmp[1];
    tmp[2] = +tmp[2];

    input.push(tmp);
  });
  input.forEach((el) => {
    if (!dp[el[0]]) {
      dp[el[0]] = checkCount(string, el[0]);
    }
    if (el[1] === 0) {
      result.push(dp[el[0]][el[2]]);
    } else {
      result.push(dp[el[0]][el[2]] - dp[el[0]][el[1] - 1]);
    }
  });

  // function
  function checkCount(string, char) {
    let arr = [];
    for (let i = 0; i < string.length; i++) {
      let tmp = i === 0 ? 0 : arr[i - 1];
      if (string[i] === char) tmp++;
      arr.push(tmp);
    }
    return arr;
  }
  console.log(result.join("\n"));
}
