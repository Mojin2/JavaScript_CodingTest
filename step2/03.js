var fs = require("fs");
var input = fs
  .readFileSync(__dirname + "/input/03_input.txt") // "/dev/stdin"
  .toString()
  .trim();

var point = parseInt(input);

if ((point % 4 == 0 && point % 100 != 0) || point % 400 == 0) {
  console.log("1");
} else {
  console.log("0");
}
