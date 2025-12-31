/*
Title: Two_Sum_1_2025-12-31T04-38-30-437Z.java
Description: sum of two numbers added upto target in a list
Date: 12/31/2025, 10:08:30 AM
*/

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer,Integer> map = new HashMap<>();
        for(int i = 0; i< nums.length; i++){
            int complement = target - nums[i];
            if(map.containsKey(complement) && map.get(complement) != i){
                return new int[]{map.get(complement),i};
            }
            map.put(nums[i], i);
        }
        return new int[] {-1, -1};
    }
}
