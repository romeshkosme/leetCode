((a, b) => {
  let aLen = a.length - 1,
    bLen = b.length - 1;
  let carry = null;
  let result = "";
  let aElem;
  let bElem;
  while (aLen >= 0 || bLen >= 0) {
    aElem = a[aLen] ? a[aLen] : 0;
    bElem = b[bLen] ? b[bLen] : 0;
    if (aElem == 0 && bElem == 0) {
      result += carry === null ? "0" : "1";
      carry = null;
    } else if ((aElem == 0 && bElem == 1) || (aElem == 1 && bElem == 0)) {
      result += carry === null ? "1" : "0";
      carry = carry === null ? null : 1;
    } else if (aElem == 1 && bElem == 1) {
      result += carry === null ? "0" : "1";
      carry = 1;
    }
    aLen--;
    bLen--;
  }
  if (carry) result += "1";
  return result.split("").reverse().join("");
})("1010", "1011");

//  10010
