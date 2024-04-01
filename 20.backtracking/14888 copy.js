const N = 6;
const array = [1, 2, 3, 4, 5, 6];
const options = [2, 1, 1, 1];
// + - x /

const operater = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => ~~(a / b),
];

let tmp = [];
let list = "";
function backtrack(array, options) {
  if (tmp.length === N - 1) {
    list += tmp.join(" ") + "\n";
    return;
  }

  for (let i = 0; i < options.length; i++) {
    if (options[i] === 0) continue;
    tmp.push(i);
    let optionsCopy = options.slice(0);
    optionsCopy[i] -= 1;
    backtrack(array, optionsCopy);
    tmp.pop();
  }
}

backtrack(array, options);
list = list.split("\n").map((el) => el.split(" ").map(Number));
list.pop();
let results = [];
list.forEach((el) => {
  let result = array.reduce((acc, cur, index) => {
    let func = operater[el[index - 1]];
    return func(acc, cur);
  });
  results.push(result);
});

console.log(Math.max(...results));
console.log(Math.min(...results));
