var fs = require("fs");
var input = fs
  .readFileSync(__dirname + "/input/04_input.txt")
  .toString()
  .trim()
  .split("\n");
var total_price = Number(input[0]);
var count = Number(input[1]);
var cal_price = 0;

for (let i = 2; i <= count + 1; i++) {
  const arr = input[i].split(" ").map((item) => +item);
  cal_price += arr[0] * arr[1];
}

if (total_price == cal_price) {
  console.log("Yes");
} else {
  console.log("No");
}
