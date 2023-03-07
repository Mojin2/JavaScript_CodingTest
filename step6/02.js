var fs = require("fs");
var input = fs
  .readFileSync(__dirname + "/input/02_input.txt")
  .toString()
  .trim()
  .split("\n");

var count = 9;
var inputC = [];
//입력값을 2차월 배열로 정리
for (let i = 0; i < count; i++) {
  inputC.push(input[i].split(" ").map((item) => +item));
}

//최대값 찾기
var max = 0;
var index_i = 0;
var index_j = 0;
for (let i = 0; i < count; i++) {
  for (let j = 0; j < count; j++) {
    if (max < inputC[i][j]) {
      max = inputC[i][j];
      index_i = i + 1;
      index_j = j + 1;
    }
  }
}
var index = [index_i, index_j];
console.log(max.toString().trim());
console.log(index.toString().trim().replace(",", " "));
