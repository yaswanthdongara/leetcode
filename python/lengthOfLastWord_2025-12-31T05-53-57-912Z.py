/*
Title: python/lengthOfLastWord_2025-12-31T05-53-57-912Z.py
Date: 12/31/2025, 11:24:16 AM
Description: Length Of Last Word in a string
*/

class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        s = s.strip()
        l = 0
        for i in s[::-1]:
            if(i != ' '):
                l += 1
            else:
                return l
        return l
        

        