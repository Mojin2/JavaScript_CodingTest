function solution(coin, cards) {
  let n = cards.length;
  let own = cards.slice(0, n / 3);
  let other = cards.slice(n / 3);
  let tmp = [];
  let round = 1;
  while (other.length !== 0) {
    // console.log("======before======", round);
    // console.log(own);
    // console.log(other);
    // console.log(tmp);
    let one = other.shift();
    let two = other.shift();
    let turn = [one, two];
    let check = false;
    // 우선 본인이 가지고 있는 카드랑 조합 확인
    let count = 0;
    for (let i = 0; i < turn.length; i++) {
      let set = new Set();
      for (let j = 0; j < own.length; j++) {
        if (turn[i] + own[j] === n + 1 && coin >= 1) {
          if (count === 0) {
            coin--;
            own.splice(j, 1);
            check = true;
            count++;
          } else if (count === 1) {
            set.add(turn[i]);
          }
          break;
        } else {
          set.add(turn[i]);
        }
      }
      let array = Array.from(set);
      tmp.push(...array);
    }
    count = 0;

    // tmp끼리 확인
    if (!check) {
      for (let i = 0; i < tmp.length; i++) {
        for (let j = 0; j < tmp.length; j++) {
          if (tmp[i] + tmp[j] === n + 1 && coin >= 2) {
            tmp.splice(i, 1);
            tmp.splice(j - 1, 1);
            coin -= 2;
            check = true;
            break;
          }
        }
        if (check) break;
      }
    }
    // 가지고 있는거와 tmp끼리 확인
    if (!check) {
      for (let i = 0; i < own.length; i++) {
        for (let j = 0; j < tmp.length; j++) {
          if (own[i] + tmp[j] === n + 1 && coin >= 1) {
            tmp.splice(j, 1);
            own.splice(i, 1);
            coin -= 1;
            check = true;
            break;
          }
        }
        if (check) break;
      }
    }
    // 새로 들어오는거랑 조합이 안된다면 본인이 들고 있는거 확인
    if (!check) {
      for (let i = 0; i < own.length; i++) {
        for (let j = i + 1; j < own.length; j++) {
          if (own[i] + own[j] === n + 1) {
            own.splice(i, 1);
            own.splice(j - 1, 1);
            check = true;
            break;
          }
        }
        if (check) break;
      }
    }
    if (check) {
      round += 1;
    } else {
      break;
    }
    // console.log("======after======");
    // console.log(own);
    // console.log(other);
    // console.log(tmp);
  }
  return round;
}

let coin = 2;
let cards = [5, 8, 1, 2, 9, 4, 12, 11, 3, 10, 6, 7];
solution(coin, cards);
// round 1 [5,8,1,2] [9,4]
