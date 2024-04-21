let dir = __dirname + "/4195.txt";
const path = process.platform === "linux" ? "./dev/stdin" : dir;
let input = require("fs").readFileSync(path).toString().trim().split("\n");

let T = +input.shift();

for (let a = 0; a < T; a++) {
  let F = +input.shift();
  let list = input.slice(0, F);
  let originalHash = new Map();
  let hash = new Map();
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    let [x, y] = list[i].split(" ");
    if (!hash.has(x)) {
      hash.set(x, { parents: x, count: count });
      originalHash.set(x, { parents: x, count: count });
    }
    if (!hash.has(y)) {
      hash.set(y, { parents: y, count: count });
      originalHash.set(y, { parents: x, count: count });
    }
  }
  union("Fred", "Barney");
  console.log(hash);

  function find(x) {
    if (hash.get(x).parents !== x) {
      return (hash.get(x).parents = find(hash.get(x).parents));
    } else {
      return hash.get(x).parents;
    }
  }
  function union(x, y) {
    x = find(x);
    y = find(y);
    if (x != y) {
      hash.set(hash.get(y).parents, x);
      hash.set(hash.get(y).count, 1);
    }
  }

  input = input.slice(F);
}
