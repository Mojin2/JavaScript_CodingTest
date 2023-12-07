let boards = [
  ["----", "----", "--x-", "--o-"],
  ["----", "----", "----", "--oo"],
  ["----", "----", "----", "x-o-"],
];

let answer = [];

boards.forEach((board) => {
  board = board.map((el) => el.split(""));
  let turn = 1; // 1 >> o턴 , 2 >> x턴
  let queue = [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 3],
  ];
  while (true) {
    if (turn === 1) {
      for (let point of queue) {
        let [x, y] = point;
        if (board[x - 1][y] !== undefined && board[x - 1][y] !== "-") {
        }
      }
    }
  }
});
