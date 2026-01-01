/*
Title: is_subsequence_2026-01-01T04-30-17-602Z.py
Description: 392
Date: 1/1/2026, 10:00:17 AM
*/

class Solution(object):
    def isSubsequence(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        i = 0
        j = 0
        while i<len(s) and j<len(t):
            if(s[i] == t[j]):
                i += 1
            j += 1
        return i == len(s)