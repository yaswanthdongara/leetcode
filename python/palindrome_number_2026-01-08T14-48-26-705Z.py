/*
Title: palindrome_number_2026-01-08T14-48-26-705Z.py
Description: 9
Date: 08/01/2026, 8:18:26 pm
*/

class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0:
            return False
        else:
            sum = 0
            temp = x
            while x > 0:
                rem = x%10
                sum = sum * 10 + rem
                x //= 10
            if sum == temp:
                return True
            else:
                return False