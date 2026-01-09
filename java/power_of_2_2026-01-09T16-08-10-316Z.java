/*
Title: power_of_2_2026-01-09T16-08-10-316Z.java
Description: 231
Date: 09/01/2026, 9:38:10 pm
*/

class Solution {
    public boolean isPowerOfTwo(int n) {
        if(n<=0)    return false;
        while(n % 2 == 0){
            n /= 2;
        }
        return n == 1;
    }
}