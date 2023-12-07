let friends = ["muzi", "ryan", "frodo", "neo"];
let gifts = [
  "muzi frodo",
  "muzi frodo",
  "ryan muzi",
  "ryan muzi",
  "ryan muzi",
  "frodo muzi",
  "frodo ryan",
  "neo muzi",
];
//result = 2

function solution(friends, gifts) {
  let board = Array.from(Array(friends.length), () =>
    Array(friends.length).fill(0)
  );
  let idx = {};
  for (let i = 0; i < friends.length; i++) {
    idx[friends[i]] = i;
  }
  gifts = gifts.map((el) => el.split(" "));
  for (let i = 0; i < gifts.length; i++) {
    board[idx[gifts[i][0]]][idx[gifts[i][1]]] += 1;
  }

  // gift score
  let giftScore = [];
  for (let i = 0; i < friends.length; i++) {
    let give = board[i].reduce((acc, cur) => acc + cur);
    let take = 0;
    for (let j = 0; j < friends.length; j++) {
      take += board[j][i];
    }
    giftScore[i] = give - take;
  }
  let result = Array(friends.length).fill(0);
  // cal
  for (let i = 0; i < board.length; i++) {
    for (let j = i + 1; j < board[i].length; j++) {
      if (i === j) continue;
      if (board[i][j] > board[j][i]) {
        result[i] += 1;
      } else if (board[j][i] > board[i][j]) {
        result[j] += 1;
      } else {
        if (giftScore[i] > giftScore[j]) {
          result[i] += 1;
        } else if (giftScore[i] < giftScore[j]) {
          result[j] += 1;
        }
      }
    }
  }
  console.log(Math.max(...result));
}
solution(friends, gifts);
