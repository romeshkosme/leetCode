nums = [-9876, -9871, 0 , 9871, 9367]
nums = [x**2 for x in nums]
print(sorted(nums))
# for i in range(len(nums)-1, 0 , -1):
#     for x in range(i):
#         if nums[x] > nums[x+1]:
#             temp = nums[x]
#             nums[x] = nums[x+1]
#             nums[x+1] = temp
#     print(nums)