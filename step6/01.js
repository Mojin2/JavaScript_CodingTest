var fs = require("fs");
var input = fs
  .readFileSync(__dirname + "/input/01_input.txt")
  .toString()
  .trim()
  .split("\n");
var size = [];
size.push(input[0].split(" ").map((item) => +item));

var tot = size[0][1];
var item1 = [];
for (let i = 1; i <= size[0][1]; i++) {
  item1.push(input[i].split(" ").map((item) => +item));
}
var item2 = [];
for (let i = 1 + size[0][1]; i <= size[0][1] + size[0][1]; i++) {
  item2.push(input[i].split(" ").map((item) => +item));
}

var ans = [];
plus = (item1, item2) => {
  for (let i = 0; i < tot; i++) {
    for (let j = 0; j < tot; j++) {
      ans.push(item1[i][j] + item2[i][j]);
    }
  }
};
plus(item1, item2);
var ans_1 = [ans[0], ans[1], ans[2]];
var ans_2 = [ans[3], ans[4], ans[5]];
var ans_3 = [ans[6], ans[7], ans[8]];
console.log(ans_1.toString().replaceAll(",", " "));
console.log(ans_2.toString().replaceAll(",", " "));
console.log(ans_3.toString().replaceAll(",", " "));
