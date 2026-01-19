/*
Title: java/reverse a string_2026-01-19T13-40-29-797Z.java
Date: 19/01/2026, 7:10:42 pm
*/

class Solution {
    public void reverseString(char[] s) {
        int left = 0;
        int right = s.length - 1;
        while (left < right){
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left += 1;
            right -= 1;
        }
    }
}