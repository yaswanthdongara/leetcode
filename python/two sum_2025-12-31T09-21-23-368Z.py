/*
Title: python/two sum_2025-12-31T09-21-23-368Z.py
Date: 12/31/2025, 2:51:36 PM
*/

d = {}
nums = [2,7,11,17]
target = 24
for i in range(len(nums)):
    c = target - nums[i]
    if(c in d):
        print(d[c],i)
    d[nums[i]]=i

         