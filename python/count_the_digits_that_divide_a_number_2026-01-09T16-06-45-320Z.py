/*
Title: count_the_digits_that_divide_a_number_2026-01-09T16-06-45-320Z.py
Description: 2520
Date: 09/01/2026, 9:36:45 pm
*/

class Solution(object):
    def countDigits(self, num):
        """
        :type num: int
        :rtype: int
        """
        temp = num
        count = 0
        while temp > 0:
            rem = temp %10
            if num%rem == 0:
                count += 1
            temp //=10
        return count