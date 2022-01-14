((nums) => {
  let tempsum = nums[0];
  let sum = tempsum;
  for (let i = 1; i < nums.length; i++) {
    tempsum += nums[i];
    if (nums[i] > tempsum) {
      tempsum = nums[i];
    }
    if (tempsum > sum) {
      sum = tempsum;
    }
  }
  console.log(sum)
  return sum;
})([1,2]);
// [5,4,-1,7,8]
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// [-2,1]
// [1,2]
