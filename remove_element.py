# leet code problem 27
class Solution(object):
    def removeElement(self, nums, val):
        k = 0
        for i in range(len(nums)):
            if(nums[i] != val):
                nums[k],nums[i] = nums[i],nums[k]
                k += 1
        return k