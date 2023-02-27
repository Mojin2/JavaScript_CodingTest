var fs = require("fs");
var input = fs
  .readFileSync(__dirname + "/input/05_input.txt")
  .toString()
  .trim();

var bite = Number(input) / 4;

ans = (bite) => {
  const repeat = "long ";
  const ans = repeat.repeat(bite);

  return ans;
};

console.log(ans(bite) + "int");
