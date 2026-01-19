/*
Title: valid_anagram_2026-01-19T15-02-52-328Z.py
Description: 242
Date: 19/01/2026, 8:32:52 pm
*/

class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        freq1 = {}
        freq2 = {}
        for ch in s:
            freq1[ch] = freq1.get(ch,0)+1
        for ch in t:
            freq2[ch] = freq2.get(ch,0)+1
        return freq1 == freq2