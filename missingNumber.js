function missingNumber(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== i) {
      return i
    }
  }
}

const TEST = [
  {
    nums: [3, 0, 1],
    value: 2,
  },
  {
    nums: [0, 1],
    value: 2,
  },
  {
    nums: [9, 6, 4, 2, 3, 5, 7, 0, 1],
    value: 8,
  },
];

for (const elem of TEST) {
  const resp = missingNumber(elem.nums);
  console.log(resp === elem.value);
}
