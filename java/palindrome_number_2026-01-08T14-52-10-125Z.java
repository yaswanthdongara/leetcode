/*
Title: palindrome_number_2026-01-08T14-52-10-125Z.java
Description: 9
Date: 08/01/2026, 8:22:10 pm
*/

class Solution {
    public boolean isPalindrome(int x) {
        if(x < 0) return false;
        else{
            int sum = 0;
            int temp = x;
            while (x > 0){
                int rem = x %10;
                sum = sum * 10 +rem;
                x /= 10;
            }
            if(temp == sum) return true;
            else return false;
        }
    }
}