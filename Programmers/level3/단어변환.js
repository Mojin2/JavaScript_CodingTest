function solution(begin, target, words) {
  let queue = [[begin, 0]];
  let visited = Array(words.length).fill(0);

  while (queue.length > 0) {
    let [cur, time] = queue.shift();

    if (cur === target) return time;

    let tmp = [];
    for (let i = 0; i < words.length; i++) {
      if (check(cur, words[i])) tmp.push(words[i]);
    }
    for (let next of tmp) {
      if (!visited[words.indexOf(next)]) {
        visited[words.indexOf(next)] = 1;
        queue.push([next, time + 1]);
      }
    }
  }
  return 0;
}

function check(a, b) {
  let dic = {};
  a = a.split("");
  b = b.split("");
  for (let i = 0; i < a.length; i++) {
    dic[a[i]] = (dic[a[i]] || 0) + 1;
    dic[b[i]] = (dic[b[i]] || 0) + 1;
  }
  let obj = Object.values(dic).filter((v) => v % 2 === 1);
  if (obj.length > 2) return false;
  return true;
}

let begin = "hit";
let target = "cog";
let words = ["hot", "dot", "dog", "lot", "log"];
console.log(solution(begin, target, words));
