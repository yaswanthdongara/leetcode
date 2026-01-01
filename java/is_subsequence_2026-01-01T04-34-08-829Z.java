/*
Title: is_subsequence_2026-01-01T04-34-08-829Z.java
Description: 392
Date: 1/1/2026, 10:04:08 AM
*/

class Solution {
    public boolean isSubsequence(String s, String t) {
        int i = 0;
        int j = 0;
        while(i < s.length() && j < t.length()){
            if(s.charAt(i) == t.charAt(j)){
                i += 1;
            }
            j += 1;
        }
        return i == s.length();
    }
}