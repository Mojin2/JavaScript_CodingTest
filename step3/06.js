var fs = require("fs");
var input = fs
  .readFileSync(__dirname + "/input/06_input.txt")
  .toString()
  .trim()
  .split("\n");

const inputC = input[0];
const inputTestCase = [];

for (let i = 1; i <= inputC; i++) {
  const arr = input[i].split(" ").map((item) => +item);
  inputTestCase.push(arr);
}

for (let i = 0; i < inputC; i++) {
  var value = inputTestCase[i][0] + inputTestCase[i][1];
  console.log(value);
}
