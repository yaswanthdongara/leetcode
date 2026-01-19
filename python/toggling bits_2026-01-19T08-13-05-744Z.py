/*
Title: python/toggling bits_2026-01-19T08-13-05-744Z.py
Date: 19/01/2026, 1:43:22 pm
*/

x = 10
print(bin(x))
bits = x.bit_length()
mask = (1<<bits)-1
print(bin(mask ^ x))