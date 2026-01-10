/*
Title: Decode_array_using_xor_2026-01-10T03-30-28-334Z.java
Description: 1720
Date: 10/01/2026, 9:00:28 am
*/

class Solution {
    public int[] decode(int[] encoded, int first) {
        int arr[] = new int[encoded.length + 1];
        arr[0] = first;
        for(int i=0;i<encoded.length;i++){
            arr[i+1] = encoded[i]^arr[i];
        }
        return arr;
    }
}