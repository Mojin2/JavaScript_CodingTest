function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);
  let parent = Array(n + 1)
    .fill(0)
    .map((el, index) => index);

  function getParent(parent, x) {
    if (parent[x] === x) return x;
    return (parent[x] = getParent(parent, parent[x]));
  }
  function unionParent(parent, x, y) {
    let n1 = getParent(parent, x);
    let n2 = getParent(parent, y);
    if (n1 < n2) return (parent[n2] = n1);
    else return (parent[n1] = n2);
  }
  function findParent(parent, x, y) {
    let n1 = getParent(parent, x);
    let n2 = getParent(parent, y);
    if (n1 === n2) return true;
    else return false;
  }
  let answer = 0;
  for (let cost of costs) {
    let [x, y, c] = cost;
    if (!findParent(parent, x, y)) {
      answer += c;
      unionParent(parent, x, y);
    }
  }
  return answer;
}

let n = 4;
let costs = [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 5],
  [1, 3, 1],
  [2, 3, 8],
];

console.log(solution(n, costs));
