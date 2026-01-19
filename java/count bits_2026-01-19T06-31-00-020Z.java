/*
Title: java/count bits_2026-01-19T06-31-00-020Z.java
Date: 19/01/2026, 12:01:16 pm
Description: Count the numbers that are with in a range of n that has exactly k bits
*/

// Java Example
public class Main {
    public static void main(String[] args) {
        int r = 0;
        int k =1;
        for(int i = 0; i<=10;i++){
            int x = i;
            int count = 0;
            while (x > 0){
                x = x & x-1;
                count += 1;
            }
            if(count == k){
                r += 1;
            }
        }
        System.out.println(r);
    }
}