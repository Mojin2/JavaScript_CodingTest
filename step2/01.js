var fs = require("fs");

var input = fs
  .readFileSync(__dirname + "/input/01_input.txt")
  .toString()
  .trim()
  .split(" ");

var a = parseInt(input[0]);
var b = parseInt(input[1]);

if (a > b) {
  console.log(">");
} else if (a == b) {
  console.log("==");
} else {
  console.log("<");
}
