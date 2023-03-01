var fs = require("fs");
var input = fs
  .readFileSync(__dirname + "/input/01_input.txt")
  .toString()
  .trim();

console.log(input.codePointAt());
