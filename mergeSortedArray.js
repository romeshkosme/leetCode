((nums1, m, nums2, n) => {
  for (let i = 0; i < n; i++) {
    nums1[m+i] = nums2[i]
  }
  for (let i = 1; i < m+n; i++) {
    if(nums1[i-1] > nums1[i]) {
      let temp = nums1[i]
      let j = i
      while(nums1[j-1] > temp) {
        nums1[j] = nums1[j-1]
        j--
      }
      nums1[j] = temp
    }
  }
  return nums1
})([0], 0, [1], 1);
// [1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3
// [1], 1, [], 0