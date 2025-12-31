/*
Title: python/find the index of first occurence_2025-12-31T10-10-52-624Z.py
Date: 12/31/2025, 3:41:22 PM
Description: find the index of first occurence a string
*/

class Solution(object):
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
  
        m,n =len(haystack),len(needle)
        for i in range(m-n+1):
            if(haystack[i:i+n] == needle):
                return i
                
        return -1

        