var fs = require("fs");
var fs_result = fs
  .readFileSync(__dirname + "/input/04_input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

var x = parseInt(fs_result[0]);
var y = parseInt(fs_result[1]);

////////readline공부하기///////////
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", function (line) {
//   console.log(lint);
//   rl.close();
// }).on("close", function () {
//   process.exit();
// });

if (x > 0 && y > 0) {
  console.log("1");
} else if (x < 0 && y > 0) {
  console.log("2");
} else if (x < 0 && y < 0) {
  console.log("3");
} else {
  console.log("4");
}
