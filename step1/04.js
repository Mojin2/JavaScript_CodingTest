var fs = require("fs");

var input = fs
  .readFileSync(__dirname + "/input/04_input.txt")
  .toString()
  .trim();

console.log(input + "??!");
