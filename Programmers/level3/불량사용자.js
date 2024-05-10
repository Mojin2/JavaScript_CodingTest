function solution(user_id, banned_id) {
  let list = [];
  banned_id.forEach((banId) => {
    let tmp = [];
    user_id.forEach((userId) => {
      let check = false;
      for (let i = 0; i < banId.length; i++) {
        if (banId[i] !== "*" && banId[i] !== userId[i]) {
          check = true;
          break;
        }
      }
      if (banId.length !== userId.length) {
        check = true;
      }
      if (!check) tmp.push(userId);
    });
    list.push([...tmp]);
  });
  let answer = [];
  let tmp2 = [];
  function backtrack(index) {
    if (tmp2.length === banned_id.length) {
      answer.push([...tmp2]);
      return;
    }
    for (let i = 0; i < list[index].length; i++) {
      if (tmp2.includes(list[index][i])) continue;
      tmp2.push(list[index][i]);
      backtrack(index + 1);
      tmp2.pop();
    }
  }
  backtrack(0);
  answer = answer.map((el) => el.sort().join(""));
  let myset = new Set(answer);
  return myset.size;
}

let user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"];
let banned_id = ["*rodo", "*rodo", "******"];

console.log(solution(user_id, banned_id));

// frodo frodo frodoc
// crodo crodo abc123
