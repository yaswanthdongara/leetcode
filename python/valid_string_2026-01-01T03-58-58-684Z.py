/*
Title: valid_string_2026-01-01T03-58-58-684Z.py
Description: 125
Date: 1/1/2026, 9:28:58 AM
*/

class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        c = ''.join(c for c in s if c.isalnum()).lower()
        return c[::-1] == c