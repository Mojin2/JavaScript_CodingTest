function solution(picks, minerals) {
  let fatigue = [
    [1, 1, 1],
    [5, 1, 1],
    [25, 5, 1],
  ];
  let needPicks = Math.ceil(minerals.length / 5);
  let picksSum = picks.reduce((acc, cur) => acc + cur);
  if (needPicks > picksSum) needPicks = picksSum;
  picks = picks // [1,2]
    .map((pick, index) => {
      let tmp = [];
      for (let i = 0; i < pick; i++) {
        tmp.push(index);
      }
      return tmp;
    })
    .flat();
  let tmp = [];
  let lists = [];
  function backtrack() {
    if (tmp.length === needPicks) {
      let arr = tmp.map((el) => picks[el]);
      lists.push([...arr]);
      return;
    }
    for (let i = 0; i < picks.length; i++) {
      if (tmp.includes(i)) continue;
      tmp.push(i);
      backtrack();
      tmp.pop();
    }
  }
  backtrack();
  minerals = minerals.slice(0, picksSum * 5);
  minerals = minerals.map((mineral, index) => {
    if (mineral === "diamond") return 0;
    if (mineral === "iron") return 1;
    if (mineral === "stone") return 2;
  });
  let answer = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < lists.length; i++) {
    // console.log("===================");
    // console.log("곡괭이 리스트", lists[i]);
    let value = 0;
    let index = 0;
    for (let j = 0; j < lists[i].length; j++) {
      //   console.log("현재 사용하는 곡괭애", lists[i][j]);
      let count = 0;
      while (true) {
        if (count === 5) break;
        if (index === minerals.length) break;
        let nowPick = lists[i][j];
        let nowMine = minerals[index];
        value += fatigue[nowPick][nowMine];
        count++;
        index++;
      }
    }
    answer = Math.min(answer, value);
  }
  return answer;
}

let picks = [0, 1, 1];
let minerals = [
  "diamond",
  "diamond",
  "diamond",
  "diamond",
  "diamond",
  "iron",
  "iron",
  "iron",
  "iron",
  "iron",
  "diamond",
];
console.log(solution(picks, minerals));
