var fs = require("fs");
var input = fs
  .readFileSync(__dirname + "/input/02_input.txt")
  .toString()
  .trim()
  .split("\n");

var inputC = input[0];
var inputTestCase = [];

for (let i = 1; i <= inputC; i++) {
  const arr = input[i].split(" ").map((item) => +item);
  let newArr = [];
  for (let j = 0; j < arr.length; j++) {
    newArr.push(arr[j]);
  }

  inputTestCase.push(newArr);
}

for (let i = 0; i < inputTestCase.length; i++) {
  console.log(inputTestCase[i][0] + inputTestCase[i][1]);
}
