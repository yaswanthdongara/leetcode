# 7. Reverse Integer:
# Example 1:
# Input: x = 123
# Output: 321
# Example 2:
# Input: x = -123
# Output: -321
# Example 3:
# Input: x = 120
# Output: 21
class Solution(object):
    def reverse(self, x):
        if x < 0:
            result = -int(str(x)[:0:-1])
        else:
            result = int(str(x)[::-1])
        if result >= -2**31 and result <= 2**31 - 1:
            return result
        else:
            return 0