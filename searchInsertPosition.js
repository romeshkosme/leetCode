((nums, target) => {
  if (target < nums[0]) {
    return 0;
  } else if (target > nums[nums.length - 1]) {
    return nums.length;
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target || nums[i] > target) {
        return i;
      }
    }
  }
})([1], 0);
