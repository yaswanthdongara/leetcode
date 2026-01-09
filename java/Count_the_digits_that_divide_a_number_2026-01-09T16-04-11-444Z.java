/*
Title: Count_the_digits_that_divide_a_number_2026-01-09T16-04-11-444Z.java
Description: 2520
Date: 09/01/2026, 9:34:11 pm
*/

class Solution {
    public int countDigits(int num) {
        int temp = num;
        int count = 0;
        while(temp > 0){
            int rem = temp % 10;
            if(num%rem == 0)
            count += 1;
            temp /= 10;
        }
        return count;
    }
}