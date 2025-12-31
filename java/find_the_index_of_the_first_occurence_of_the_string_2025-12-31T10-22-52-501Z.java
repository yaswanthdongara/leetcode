/*
Title: find_the_index_of_the_first_occurence_of_the_string_2025-12-31T10-22-52-501Z.java
Description: 
Date: 12/31/2025, 3:52:52 PM
*/

class Solution {
    public int strStr(String haystack, String needle) {
        int m = haystack.length();
        int n = needle.length();
        for(int i = 0; i<=m-n;i++){
            if(haystack.substring(i,i+n).equals(needle)){
                return i;
            }
        }
        return -1;
    }
}