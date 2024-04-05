let dir = __dirname + "/2630.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = Number(input.shift());
let board = input.map((el) => el.split(" ").map(Number));

let white = 0;
let blue = 0;
function search(arr) {
  let tmp = arr.reduce((acc, cur) => acc.concat(cur));
  let tmpSet = new Set(tmp);
  if (tmpSet.size === 1) {
    if (tmpSet.has(1)) blue++;
    if (tmpSet.has(0)) white++;
    return;
  }

  let [first, second, third, fourth] = divide(arr);
  search(first);
  search(second);
  search(third);
  search(fourth);
}

function divide(tmp) {
  let pivot = Math.floor(tmp.length / 2);
  let front = tmp.slice(0, pivot);
  let end = tmp.slice(pivot);
  let first = [];
  let second = [];
  let third = [];
  let fourth = [];
  front.forEach((el) => {
    first.push(el.slice(0, pivot));
    second.push(el.slice(pivot));
  });
  end.forEach((el) => {
    third.push(el.slice(0, pivot));
    fourth.push(el.slice(pivot));
  });

  return [first, second, third, fourth];
}

search(board);
console.log(white, blue);
