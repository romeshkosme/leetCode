function main(nums, k) {
  if (nums.length === 1) return false;
  let duplicate = false;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
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
    nums: [1, 2, 3, 1],
    k: 3,
    value: true,
  },
  {
    nums: [1, 0, 1, 1],
    k: 3,
    value: true,
  },
  {
    nums: [1, 2, 3, 1, 2, 3],
    k: 2,
    value: false,
  },
];

for (const elem of TESTS) {
  const res = main(elem.nums, elem.k);
  console.log(res === elem.value);
}
