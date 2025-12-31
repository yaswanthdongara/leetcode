/*
Title: python/longest common prefix_2025-12-31T09-07-42-922Z.py
Date: 12/31/2025, 2:38:01 PM
*/

class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        s = strs[0]
        for i in range(1,len(strs)):
            while not strs[i].startswith(s):
                s = s[:-1]
        return s
        