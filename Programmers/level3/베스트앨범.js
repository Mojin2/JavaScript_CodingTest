function solution(genres, plays) {
  let hash = {};
  let size = {};
  let answer = [];
  for (let i = 0; i < genres.length; i++) {
    size[genres[i]] = (size[genres[i]] || 0) + plays[i];

    if (!hash[genres[i]]) hash[genres[i]] = [[plays[i], i]];
    else hash[genres[i]].push([plays[i], i]);
  }
  size = Object.entries(size)
    .sort((a, b) => b[1] - a[1])
    .map((el) => el[0]);
  let arr = Object.entries(hash).map((el) => [
    el[0],
    el[1].sort((a, b) => b[0] - a[0]),
  ]);

  size.forEach((el) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === el && arr[i][1].length >= 2) {
        answer.push(arr[i][1][0][1], arr[i][1][1][1]);
      }
      if (arr[i][0] === el && arr[i][1].length === 1) {
        answer.push(arr[i][1][0][1]);
      }
    }
  });
  return answer;
}

let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [200, 1, 80, 100, 1];

console.log(solution(genres, plays));

hash = {
  classic: {
    size: 1450,
    list: [
      [500, 0],
      [150, 2],
    ],
  },
};
