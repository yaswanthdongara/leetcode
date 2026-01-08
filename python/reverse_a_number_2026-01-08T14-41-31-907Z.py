/*
Title: reverse_a_number_2026-01-08T14-41-31-907Z.py
Description: 7
Date: 08/01/2026, 8:11:31 pm
*/

class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        if x > 0:
            sum = 0
            while x > 0:
                rem = x %10
                sum = sum*10 + rem
                x //= 10
            if sum <= 2 ** 31 -1:
                return sum
            else:
                return 0
        else:
            x = abs(x)
            sum = 0
            while x > 0:
                rem = x %10
                sum = sum*10 + rem
                x //= 10
            if -sum >= -2 ** 31 -1:
                return -sum
            else:
                return 0

        