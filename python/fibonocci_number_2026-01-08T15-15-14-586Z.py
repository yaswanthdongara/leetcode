/*
Title: fibonocci_number_2026-01-08T15-15-14-586Z.py
Description: 509 sum of last numbers in Fibonacci sequence
Date: 08/01/2026, 8:45:14 pm
*/

class Solution(object):
    def fib(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n < 1:
            return 0
        elif n == 1:
            return 1
        elif n>=2:
            a = 0
            b = 1
            l = []
            for i in range(n):
                l.append(a)
                c = a +b
                a = b
                b = c
            return l[-1]+l[-2]
        else:
            return 0
