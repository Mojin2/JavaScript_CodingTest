var fs = require("fs");
var input = fs
  .readFileSync(__dirname + "/input/02_input.txt") // "/dev/stdin"
  .toString()
  .trim();

var point = parseInt(input);
console.log(point);

test = (point) => {
  if (point >= 90) {
    console.log("A");
  } else if (point < 90 && point >= 80) {
    console.log("B");
  } else if (point < 80 && point >= 70) {
    console.log("C");
  } else if (point < 70 && point >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
};

test(point);
