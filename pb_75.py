class Solution(object):
    def sortColors(self, nums):
        left = 0
        mid = 0
        right = len(nums)-1
        while mid<=right:
            if nums[mid] == 0:
                nums[left],nums[mid] = nums[mid], nums[left]
                left += 1
                mid += 1
            elif nums[mid] == 1:
                mid += 1
            else:
                nums[right], nums[mid] = nums[mid], nums[right]
                right -= 1
        
# 75. Sort Colors:
# Example 1:
# Input: nums = [2,0,2,1,1,0]
# Output: [0,0,1,1,2,2]
# Explanation:
# The array has two 0s, two 1s, and two 2s. Sorting them in-place places all 0s first, then all 1s, then all 2s.