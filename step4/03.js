var fs = require("fs");
var input = fs
  .readFileSync(__dirname + "/input/03_input.txt")
  .toString()
  .trim()
  .split("\n");

var basketC = input[0].split(" ").map((item) => +item)[0];
var inputC = input[0].split(" ").map((item) => +item)[1];
var inputTestCase = [];
for (let i = 1; i <= inputC; i++) {
  var arr = input[i].split(" ").map((item) => +item);
  inputTestCase.push(arr);
}
//console.log(inputTestCase);

var ans = [];
for (let i = 0; i < basketC; i++) {
  ans.push(0);
}
//console.log(ans);
for (let i = 0; i < inputC; i++) {
  for (let j = inputTestCase[i][0] - 1; j < inputTestCase[i][1]; j++) {
    ans[j] = inputTestCase[i][2];
  }
}

console.log(ans.toString().replaceAll(",", " "));
