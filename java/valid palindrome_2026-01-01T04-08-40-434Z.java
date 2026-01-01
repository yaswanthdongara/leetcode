/*
Title: java/valid palindrome_2026-01-01T04-08-40-434Z.java
Date: 1/1/2026, 9:38:56 AM
Description: using two pointer approach
*/


class Solution {
    public boolean isPalindrome(String s) {

        // Remove special characters & spaces, convert to lowercase
        s = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();

        int left = 0;
        int right = s.length() - 1;

        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}
