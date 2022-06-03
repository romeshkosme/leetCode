((num1, num2) => {
  let sum = "";
  let p1 = num1.length;
  let p2 = num2.length;
  let carry = 0;
  let tempSum;
  while (p1 > 0 && p2 > 0) {
    tempSum = "";
    tempSum += +num1[--p1] + +num2[--p2];
    tempSum = carry > 0 ? `${+tempSum + +carry}` : tempSum;
    carry = +tempSum > 9 ? +tempSum[0] : 0;
    sum = +tempSum > 9 ? tempSum[1] + sum : tempSum + sum;
  }
  while (p1 > 0) {
    p1--;
    tempSum = num1[p1];
    if (carry > 0) {
      tempSum = `${+tempSum + +carry}`;
      carry = +tempSum > 9 ? +tempSum[0] : 0;
    }
    sum = +tempSum > 9 ? tempSum[1] + sum : tempSum + sum;
  }
  while (p2 > 0) {
    p2--;
    tempSum = num2[p2];
    if (carry > 0) {
      tempSum = `${+tempSum + +carry}`;
      carry = +tempSum > 9 ? tempSum[0] : 0;
    }
    sum = +tempSum > 9 ? tempSum[1] + sum : tempSum + sum;
  }
  sum = carry > 0 ? carry + sum : sum;
  return sum;
})("9", "199");
