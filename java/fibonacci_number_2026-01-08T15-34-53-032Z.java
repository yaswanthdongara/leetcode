/*
Title: fibonacci_number_2026-01-08T15-34-53-032Z.java
Description: 509 sum of last two digits in a Fibonacci series
Date: 08/01/2026, 9:04:53 pm
*/

class Solution {
    public int fib(int n) {
        if(n < 1) return 0;
        else if(n == 1) return 1;
        else{
        List<Integer> fib = new ArrayList<>();
        int a = 0;
        int b = 1;
        for(int i = 0;i < n; i++){
            fib.add(a);
            int c = a+b;
            a = b;
            b = c;
        }
        return fib.get(fib.size()-1) + fib.get(fib.size()-2);
        }
    }
}