let dir = __dirname + "/25308.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

input = input[0].split(" ").map(Number);

// 8개중 8개를 뽑아서 순서상관 있는 순열
let N = input.length;
let tmp = [];
let answer = [];
function backtrack() {
  if (tmp.length === N) {
    answer.push([...tmp]);
    return;
  }

  for (let i = 0; i < input.length; i++) {
    if (tmp.includes(i)) continue;
    tmp.push(i);
    backtrack();
    tmp.pop();
  }
}

backtrack();
answer = answer.map((el) => el.map((value) => input[value]));
let d = Math.SQRT1_2;
let dx = [0, d, 1, d, 0, -d, -1, -d];
let dy = [1, d, 0, -d, -1, -d, 0, d];

// [0, 1, 2, 3, 4, 5, 6, 7];
let count = 0;
for (let p of answer) {
  // p = [6,7,7,8,9,10,11,13]
  for (let i = 0; i < p.length; i++) {
    let nx = dx[i] * p[i];
    let ny = dy[i] * p[i];
    p[i] = [nx, ny];
  }
  let check = false;
  for (let i = 0; i < p.length; i++) {
    let p1 = p[i];
    let p2 = p[(i + 1) % 8];
    let p3 = p[(i + 2) % 8];
    let value = CCWW([p1, p2, p3]);
    if (value > 0) {
      check = true;
      break;
    }
  }
  if (check) continue;
  count++;
}

console.log(count);

function CCW(input) {
  let p1 = input[0];
  let p2 = input[1];
  let p3 = input[2];

  return (p2[0] - p1[0]) * (p3[1] - p2[1]) - (p3[0] - p2[0]) * (p2[1] - p1[1]);
}

function CCWW(input) {
  let p1 = input[0];
  let p2 = input[1];
  let p3 = input[2];

  let external1 = p1[0] * p2[1] + p2[0] * p3[1] + p3[0] * p1[1];
  let external2 = p1[1] * p2[0] + p2[1] * p3[0] + p3[1] * p1[0];

  if (external1 > external2) return 1;
  else if (external1 < external2) return -1;
  else return 0;
}
