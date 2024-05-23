function solution(enroll, referral, seller, amount) {
  var answer = [];
  let parents = {};
  let costs = {};

  for (let i = 0; i < enroll.length; i++) {
    parents[enroll[i]] = referral[i];
    costs[enroll[i]] = 0;
  }

  for (let i = 0; i < seller.length; i++) {
    let cur = seller[i];
    let money = amount[i] * 100;
    while (true) {
      if (money === 0 || cur === "-") break;
      costs[cur] += money - Math.floor(money * 0.1);
      cur = parents[cur];
      money = Math.floor(money * 0.1);
    }
  }
  return Object.values(costs);
}

let enorll = ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"];
let referral = ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"];
let seller = ["young", "john", "tod", "emily", "mary"];
let amount = [12, 4, 2, 5, 10];
console.log(solution(enorll, referral, seller, amount));
