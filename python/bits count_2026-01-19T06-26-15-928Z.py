/*
Title: python/bits count_2026-01-19T06-26-15-928Z.py
Date: 19/01/2026, 11:57:14 am
Description: Count the numbers that are with in a range of n that has exactly k bits
*/

n = int(input())
k = int(input())
r = 0
for i in range(1,n+1):
    c = 0
    x = i
    while x > 0:
        x = x & x-1
        c += 1
    if c == k:
        r += 1
print(r)   