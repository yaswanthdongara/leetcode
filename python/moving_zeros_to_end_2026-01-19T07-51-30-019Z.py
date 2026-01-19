/*
Title: moving_zeros_to_end_2026-01-19T07-51-30-019Z.py
Description: 
Date: 19/01/2026, 1:21:30 pm
*/

class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        pos = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[pos] = nums[i]
                pos += 1
        while pos<len(nums):
            nums[pos] = 0
            pos += 1
        return nums

        