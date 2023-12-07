let dice = [
  [40, 41, 42, 43, 44, 45],
  [43, 43, 42, 42, 41, 41],
  [1, 1, 80, 80, 80, 80],
  [70, 70, 1, 1, 70, 70],
];

function solution(dice) {
  let n = dice.length / 2;
  let number = Array(dice.length)
    .fill(0)
    .map((_, idx) => idx);

  // Combination case
  let answer = "";
  let tmp = [];
  const backtrack = (cur) => {
    if (tmp.length === n) {
      answer += tmp + " ";
      return;
    }
    for (let i = cur; i < number.length; i++) {
      if (tmp.includes(number[i])) continue;
      tmp.push(number[i]);
      backtrack(i + 1);
      tmp.pop();
    }
  };
  backtrack(0);
  answer = answer.trim().split("/n");
  answer = answer[0].split(" ").map((el) => el.split(",").map(Number));

  // cal
  let hash = {};
  let max = 0;
  let res = [];
  answer.forEach((el) => {
    let count = 0;
    let win = 0;
    let draw = 0;
    let lose = 0;
    let A = el;
    let B = number.filter((dice) => dice !== el[0] && dice !== el[1]);
    if (A.length === 1) {
      for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
          if (A[i] > B[j]) count++;
        }
      }
      if (count > max) {
        max = count;
        res.pop();
        res.push([A[0]]);
      }
    } else {
      let Acase = [];
      let Bcase = [];
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          Acase.push(dice[A[0]][i] + dice[A[1]][j]);
          Bcase.push(dice[B[0]][i] + dice[B[1]][j]);
        }
      }
      for (let i = 0; i < Acase.length; i++) {
        for (let j = 0; j < Bcase.length; j++) {
          if (Acase[i] > Bcase[j]) win++;
          else if (Acase[i] === Bcase[j]) draw++;
          else lose++;
        }
      }
      hash[el] = [win, draw, lose];
      if (count > max) {
        max = count;
        res.pop();
        res.push([A[0], A[1]]);
      }
    }
  });
  console.log(hash);
  //   console.log(res[0].map((el) => el + 1));
}
solution(dice);
