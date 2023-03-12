//가위바위보
function solution(rsp) {
  //   var answer = [];
  //   var new_arr = Array.from(rsp);
  //   for (let i = 0; i < new_arr.length; i++) {
  //     //for(let i of rsp)
  //     if (new_arr[i] === "0") {
  //       answer.push("5");
  //     } else if (new_arr[i] === "2") {
  //       answer.push("0");
  //     } else {
  //       answer.push("2");
  //     }
  //   }
  //   return answer.join("");

  let answer = { 0: "5", 2: "0", 5: "2" };
  return [...rsp].map((item) => answer[item]).join("");
}

rsp = "205";
console.log(solution(rsp));
