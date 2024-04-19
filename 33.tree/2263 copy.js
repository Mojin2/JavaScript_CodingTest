let dir = __dirname + "/2263.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let n = +input.shift();
let inO = input.shift().split(" ").map(Number); // 1 2 3 왼쪽 중앙 오른쪽
let postO = input.shift().split(" ").map(Number); // 1 3 2 왼쪽 오른쪽 중앙

let preO = ""; // 중앙 왼쪽 오른쪽

console.log(inO);
let index = Array(n + 1).fill(-1);
for (let i = 0; i < n; i++) {
  index[inO[i]] = i;
}
console.log(index);

let answer = [];

function preorder(instart, inend, poststart, postend) {
  if (instart > inend || poststart > postend) return;

  let root = postO[postend];
  let rootidx = index[root];

  let leftsize = rootidx - instart;
  let rightsize = inend - rootidx;

  answer.push(root);
  preorder(
    instart,
    instart + leftsize - 1,
    poststart,
    poststart + leftsize - 1
  );
  preorder(inend - rightsize + 1, inend, postend - rightsize, postend - 1);
}

preorder(0, n - 1, 0, n - 1);
console.log(answer.join(" "));
