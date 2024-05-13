function solution(tickets) {
  let start = "ICN";
  let answer = [start];
  let returnValue = [];
  let visited = Array(tickets.length).fill(0);
  let check = 0;
  function DFS(start) {
    let cur = start;

    if (answer.length === tickets.length + 1) {
      check++;
      if (check === 1) {
        returnValue = [...answer];
      }
      return;
    }

    let tmp = [];
    tickets.forEach((ticket, index) => {
      if (ticket[0] === cur && !visited[index]) {
        tmp.push([ticket[0], ticket[1], index]);
      }
    });
    tmp.sort((a, b) => {
      let nameA = a[1];
      let nameB = b[1];

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    for (let p of tmp) {
      let [cur, next, index] = p;
      if (!visited[index]) {
        visited[index] = 1;
        answer.push(next);
        DFS(next);
        answer.pop();
        visited[index] = 0;
      }
    }
  }
  DFS(start);
  return returnValue;
}

let tickets = [
  ["ICN", "SFO"],
  ["ICN", "ATL"],
  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
];

console.log(solution(tickets));
