((nums) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[0] === nums[i]) {
      nums.splice(i, 1);
      nums.splice(0, 1);
      i = 0;
    }
  }
  return nums[0];
})([4,1,2,1,2]);


