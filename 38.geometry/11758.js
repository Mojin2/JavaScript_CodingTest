let dir = __dirname + "/11758.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

input = input.map((el) => el.split(" ").map(Number));

// |(x2 - x1) (x3 - x2)|
// |(y2 - y1) (y3 - y2)|
function CCW(input) {
  let p1 = input[0];
  let p2 = input[1];
  let p3 = input[2];

  return (p2[0] - p1[0]) * (p3[1] - p2[1]) - (p3[0] - p2[0]) * (p2[1] - p1[1]);
}

if (CCW(input) > 0) console.log(1);
else if (CCW(input) < 0) console.log(-1);
else console.log(0);
