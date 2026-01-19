/*
Title: valid_anagram_2026-01-19T14-57-41-277Z.java
Description: 242
Date: 19/01/2026, 8:27:41 pm
*/

class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) return false;
        int freq1[] = new int[26];
        for(char c:s.toCharArray()){
            freq1[c - 'a']++;
        }
        int freq2[] = new int[26];
        for(char c:t.toCharArray()){
            freq2[c - 'a']++;
        }
        
        return Arrays.equals(freq1,freq2);
    }
}