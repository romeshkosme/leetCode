((nums, val) => {
  let valCount = 0;
  for (let i = 0; i < nums.length-valCount; i++) {
    if (nums[i] === val) {
      let temp = nums[i];
      nums[i] = nums[nums.length - (valCount + 1)];
      nums[nums.length - (valCount + 1)] = temp;
      valCount++;
      i--;
    }
  }
  return nums.length-valCount;
})([3,2,2,3], 3);

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   return nums.length;