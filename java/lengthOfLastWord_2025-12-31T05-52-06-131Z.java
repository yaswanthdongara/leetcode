/*
Title: java/lengthOfLastWord_2025-12-31T05-52-06-131Z.java
Date: 12/31/2025, 11:22:54 AM
Description: Length Of Last Word in a string
*/

class Solution {
    public int lengthOfLastWord(String s) {
        int l = 0;
        s = s.trim();
        for(int i = s.length() -1 ; i >= 0; i--){
            if(s.charAt(i) != ' ') l += 1;
            else    return l;
        }
        return l;
    }
}