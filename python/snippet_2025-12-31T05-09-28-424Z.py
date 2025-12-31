/*
Title: python/snippet_2025-12-31T05-09-28-424Z.py
Date: 12/31/2025, 10:39:56 AM
Description: roman number to integer
*/

s = 'IV'
d = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
sum = 0

for i in range(len(s)):
    if i > 0 and d[s[i]] > d[s[i-1]]:
        sum += d[s[i]] - 2*d[s[i-1]]
    else:
        sum += d[s[i]]
        
print(sum)