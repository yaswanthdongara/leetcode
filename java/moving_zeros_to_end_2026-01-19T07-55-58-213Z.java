/*
Title: moving_zeros_to_end_2026-01-19T07-55-58-213Z.java
Description: 283
Date: 19/01/2026, 1:25:58 pm
*/

class Solution {
    public void moveZeroes(int[] nums) {
        int pos = 0;
        for(int i = 0; i<nums.length;i++){
            if(nums[i] != 0){
                nums[pos] = nums[i];
                pos += 1;
            }
        }
        while(pos < nums.length){
            nums[pos] = 0;
            pos += 1;
        }
    }
}