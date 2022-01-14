((digits) => {
  if (digits[digits.length - 1] != 9) {
    digits[digits.length - 1] += 1;
  } else {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] === 9) {
        digits[i] = 0;
        digits = !digits[i - 1] ? [1].concat(digits) : digits;
      }
      if (digits[i - 1] && digits[i - 1] !== 9) {
        digits[i - 1] += 1;
        break;
      }
    }
  }
  console.log(digits);
  return digits;
})([9,9]);
// [1,2,3]
// [4,3,2,1]
// [9]
