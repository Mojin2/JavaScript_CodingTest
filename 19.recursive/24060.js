const fs = require("fs"); // 제출시 삭제
const path = __dirname + "/24060.txt"; // 제출시 삭제

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
let count = 0;
function mergeSort(array, k) {
  if (array.length < 2) {
    return array;
  }
  let pivot = Math.ceil(array.length / 2);
  let left = mergeSort(array.slice(0, pivot), k);
  let right = mergeSort(array.slice(pivot), k);
  return merge(left, right, k);
}
function merge(left, right, k) {
  let result = [];
  let [i, j] = [0, 0];
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      let tmp = left[i];
      result.push(tmp);
      count++;
      i++;
      if (count === k) console.log(tmp);
    } else {
      let tmp = right[j];
      result.push(tmp);
      count++;
      j++;
      if (count === k) console.log(tmp);
    }
  }
  while (i < left.length) {
    let tmp = left[i];
    result.push(tmp);
    count++;
    i++;
    if (count === k) console.log(tmp);
  }
  while (j < right.length) {
    let tmp = right[j];
    result.push(tmp);
    count++;
    j++;
    if (count === k) console.log(tmp);
  }
  return result;
}
function solution(list) {
  let k = list[0][1];
  let arr = list[1];
  mergeSort(arr, k);
  if (count < k) console.log(-1);
}
