var fs = require("fs");
var input = fs
  .readFileSync(__dirname + "/input/03_input.txt")
  .toString()
  .trim()
  .split("\n");

const inputC = input[0];
for (let i = 1; i <= inputC; i++) {
  console.log(input[i][0] + input[i][input[i].length - 1]);
}
