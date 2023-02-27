var fs = require("fs");
var input_fs = fs
  .readFileSync(__dirname + "/input/03_input.txt")
  .toString()
  .trim();

var input = Number(input_fs);

var result = 0;
for (let i = 1; i <= input; i++) {
  result += i;
}

console.log(result);
