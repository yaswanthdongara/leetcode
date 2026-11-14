class Solution(object):
    def moveZeroes(self, nums):
        i=0
        for j in range(len(nums)):
            if nums[j] != 0:
                nums[i],nums[j] = nums[j],nums[i]
                i += 1
                
# 283. Move Zeroes:
# Example 1:
# Input: nums = [0,1,0,3,12]
# Output: [1,3,12,0,0]