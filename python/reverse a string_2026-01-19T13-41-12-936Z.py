/*
Title: python/reverse a string_2026-01-19T13-41-12-936Z.py
Date: 19/01/2026, 7:11:24 pm
*/

class Solution(object):
    def reverseString(self, s):
        """
        :type s: List[str]
        :rtype: None Do not return anything, modify s in-place instead.
        """
        left = 0
        right = len(s)-1
        while left < right:
            s[left],s[right] = s[right],s[left]
            left += 1
            right -=1
        return s 
        
        