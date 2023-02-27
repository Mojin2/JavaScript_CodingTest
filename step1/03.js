var fs = require("fs");

var input = fs
  .readFileSync(__dirname + "/input/03_input.txt")
  .toString()
  .split(" ");

var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a - b);
console.log(a * b);
console.log(a / b);

//console.log(process.cwd());
