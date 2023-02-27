var fs = require("fs");
var input = fs
  .readFileSync(__dirname + "/input/06_input.txt")
  .toString()
  .trim()
  .split("/n");

console.log(input);
