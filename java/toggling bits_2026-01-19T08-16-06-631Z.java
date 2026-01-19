/*
Title: java/toggling bits_2026-01-19T08-16-06-631Z.java
Date: 19/01/2026, 1:46:19 pm
*/

// Java Example
public class Main {
    public static void main(String[] args) {
        int n =10;
        int bits = Integer.toBinaryString(n).length();
        int mask = (1<<bits)-1;
        System.out.println(n ^ mask);
    }
}