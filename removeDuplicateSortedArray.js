// remove duplicate from sorted array
const removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i+1]) {
        nums.splice(i, 1);
        i -= 1;
      }
  }

  // let j = 1;
  //   for(let i = 1; i < nums.length; i++) {
  //       if(nums[i] !== nums[j-1]) {
  //           nums[j] = nums[i];
  //           j++;
  //       }
  //   }
  //   console.log("j", j);
  //  return j;
  console.log("ins -- ", nums)
  return nums;
};

const a = removeDuplicates([0, 0,0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log("a", a);
