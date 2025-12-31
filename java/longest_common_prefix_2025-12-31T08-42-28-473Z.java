/*
Title: longest_common_prefix_2025-12-31T08-42-28-473Z.java
Description: 
Date: 12/31/2025, 2:12:28 PM
*/

class Solution {
    public String longestCommonPrefix(String[] strs) {
       String s = strs[0];
       for(int i = 0; i< strs.length;i++){
        while(strs[i].indexOf(s) != 0){
            s = s.substring(0,s.length()-1);
        }
       } 
       return s; 
    }
}