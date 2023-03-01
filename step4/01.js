var fs = require("fs");
var input = fs
  .readFileSync(__dirname + "/input/01_input.txt")
  .toString()
  .trim()
  .split("\n");

var inputC = input[0];
var target = input[2];
var inputTestCase = [];

inputTestCase = input[1].split(" ").map((item) => +item);

var count = 0;
for (let i = 0; i < inputC; i++) {
  if (inputTestCase[i] == target) {
    count++;
  }
}
console.log(count);
