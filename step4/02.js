var fs = require("fs");
var input = fs
  .readFileSync(__dirname + "/input/02_input.txt")
  .toString()
  .trim()
  .split("\n");

var inputC = input[0].split(" ").map((item) => +item)[0];
var target = input[0].split(" ").map((item) => +item)[1];

var arr = input[1].split(" ").map((item) => +item);
var ans = [];
for (i = 0; i < inputC; i++) {
  if (arr[i] < target) {
    ans.push(arr[i]);
  }
}
console.log(ans.toString().replaceAll(",", " ").trim());
