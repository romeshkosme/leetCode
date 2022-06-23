function main(nums) {
  if (nums.length === 1) return false;
  let duplicate = false;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        duplicate = true;
        break;
      }
    }
    if (duplicate) break;
  }
  return duplicate;
}

const TESTS = [
  {
    input: [1, 2, 3, 1],
    value: true,
  },
  {
    input: [1, 2, 3, 4],
    value: false,
  },
  {
    input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
    value: true,
  },
  {
    input: [3],
    value: false,
  },
];
for (const elem of TESTS) {
  const res = main(elem.input);
  console.log(res === elem.value);
}
