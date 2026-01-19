/*
Title: first_unique_character_in_a_string_2026-01-19T14-44-10-425Z.java
Description: 387
Date: 19/01/2026, 8:14:10 pm
*/

class Solution {
    public int firstUniqChar(String s) {
        int freq[] = new int[26];
        for(char c:s.toCharArray()){
            freq[c - 'a']++;
        }
        for(int i = 0;i<s.length();i++){
            if(freq[s.charAt(i)-'a'] == 1){
                return i;
            }
        }
        return -1;
    }
}