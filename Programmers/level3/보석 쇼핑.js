function solution(gems) {
  let map = new Map();
  let num_goal = [...new Set(gems)].length;
  let min = Number.MAX_SAFE_INTEGER;
  let answer;

  gems.forEach((gem, index) => {
    map.delete(gem);
    map.set(gem, index);
    if (map.size === num_goal) {
      let start = map.values().next().value;
      let end = index;
      if (min > end - start + 1) {
        min = end - start + 1;
        answer = [start + 1, end + 1];
      }
    }
  });
  return answer;
}

let gems = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"];
console.log(solution(gems));
