/*
Title: valid_palindrome_2026-01-01T03-53-33-760Z.java
Description: 125
Date: 1/1/2026, 9:23:33 AM
*/

class Solution {
    public boolean isPalindrome(String s) {
        s = s.replaceAll("[^a-zA-Z0-9]","").toLowerCase();
        String reversed = new StringBuilder(s).reverse().toString();
        if(s.equals(reversed))  return true;
        return false;
    }
}