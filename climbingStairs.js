((n) => {
  let step = 1;
  let temp = Math.floor(n / 2) //+ (n % 2 != 0 && n != 1 ? 1 : 0)
  step += (n % 2 != 0 && n != 1) ? 1 : 0
  step += temp * temp
  console.log(step)
  return step
})(5);
// 1: 1
// 2: 2
// 3: 3
// 4: 5
// 5:
// n : every 1 step
// if (n%2 === 0) (n/2) every 2 step
// if (n&2 != 0) (math.floor(n/2) + 1)
// 4
// 2 2
// 2 1 1
// 1 2 1
// 1 1 2
// 1 1 1 1
// 5
// 1 1 1 1 1
// 1 2 2
// 2 1 2
// 2 2 1
// 2 1 1 1
// 1 2 1 1
// 1 1 2 1
// 1 1 1 2
