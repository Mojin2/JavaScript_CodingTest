var fs = require("fs");
var input = Number(
  fs
    .readFileSync(__dirname + "/input/01_input.txt")
    .toString()
    .trim()
);

gugudan = (input) => {
  for (let i = 1; i < 10; i++) {
    console.log(`${input} * ${i} = ${input * i}`);
  }
};

gugudan(input);
