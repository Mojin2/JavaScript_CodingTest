function solution(orders, course) {
  let answer = [];
  orders = orders.map((el) => el.split("").sort().join(""));
  course.forEach((count) => {
    let hash = {};
    let max = Number.MIN_SAFE_INTEGER;
    orders.forEach((order) => {
      combination(order, count).forEach((el) => {
        if (hash[el]) {
          hash[el] += 1;
          max = Math.max(hash[el], max);
        } else {
          hash[el] = 1;
        }
      });
    });
    let arr = Object.entries(hash);
    arr.forEach((v) => {
      if (v[1] === max) answer.push(v[0]);
    });
  });
  return answer.sort();
}

let orders = ["XYZ", "XWY", "WXA"];
let course = [2, 3, 4];

console.log(solution(orders, course));
function combination(number, k) {
  let answer = [];
  let tmp = [];

  const backtrack = (cur) => {
    if (tmp.length === k) {
      answer.push([...tmp].join(""));
      return;
    }
    for (let i = cur; i < number.length; i++) {
      tmp.push(number[i]);
      backtrack(i + 1);
      tmp.pop();
    }
  };
  backtrack(0);
  return answer;
}
