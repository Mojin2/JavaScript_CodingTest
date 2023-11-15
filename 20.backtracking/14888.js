const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/14888.txt"; // 제출시 삭제

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
let cal = ["+", "-", "*", "/"];
function solution(list) {
  const n = list[0];
  let arr = list[1];
  let givenCal = list[2];
  let havCal = [];
  let [plusIndex, minusIndex, multipleIndex, divideIndex] = [1, 1, 1, 1];
  for (let i = 0; i < givenCal.length; i++) {
    for (let k = 0; k < givenCal[i]; k++) {
      if (cal[i] === "+") {
        havCal.push(cal[i] + plusIndex.toString());
        plusIndex += 1;
      }
      if (cal[i] === "-") {
        havCal.push(cal[i] + minusIndex.toString());
        minusIndex += 1;
      }
      if (cal[i] === "*") {
        havCal.push(cal[i] + multipleIndex.toString());
        multipleIndex += 1;
      }
      if (cal[i] === "/") {
        havCal.push(cal[i] + divideIndex.toString());
        divideIndex += 1;
      }
    }
  }
  let tmp = [];
  let answer = [];
  function DFS() {
    if (tmp.length === n - 1) {
      //   ans += result(tmp, arr) + "\n";
      let tmpArr = tmp.map((el) => el[0]);
      answer.push([...tmpArr]);
      return;
    } else {
      for (let i = 0; i < havCal.length; i++) {
        if (tmp.includes(havCal[i])) continue;
        tmp.push(havCal[i]);
        DFS();
        tmp.pop();
      }
    }
  }
  DFS();
  function result(tmp, arr) {
    tmp = tmp.map((el) => el[0]);
    let answer = arr[0];
    arr = arr.slice(1);
    for (let i = 0; i < arr.length; i++) {
      if (tmp[i] === "+") {
        answer += arr[i];
      }
      if (tmp[i] === "-") {
        answer -= arr[i];
      }
      if (tmp[i] === "*") {
        answer *= arr[i];
      }
      if (tmp[i] === "/") {
        if (answer < 0) {
          answer = -Math.floor(Math.abs(answer) / arr[i]);
        } else {
          answer = Math.floor(answer / arr[i]);
        }
      }
    }
    return answer;
  }
  answer = answer.map((el) => el.join(" "));
  let set = new Set(answer);
  let ar = Array.from(set);
  ar = ar.map((el) => el.split(" "));
  let ans = [];
  ar.forEach((el) => ans.push(result(el, arr)));

  let max = Math.max(...ans);
  let min = Math.min(...ans);
  console.log(max);
  console.log(min);
}
