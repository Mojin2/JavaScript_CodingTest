function solution(routes) {
  let count = 0;
  routes = routes.sort((a, b) => a[1] - b[1]);
  console.log(routes);
  for (let i = 0; i < routes.length; i++) {
    if (i === routes.length - 1) {
      count++;
      break;
    }
    let target = routes[i][1];
    for (let j = i + 1; j < routes.length; j++) {
      if (target < routes[j][0]) {
        i = j - 1;
        count++;
        break;
      }
    }
  }
  return count;
}

let routes = [
  [-20, -15],
  [-14, -5],
  [-4, -3],
  [-2, -1],
];

console.log(solution(routes));
