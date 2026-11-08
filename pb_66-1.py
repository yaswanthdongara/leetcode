class Solution(object):
    def plusOne(self, digits):
        st = int(''.join(map(str,digits)))
        st += 1
        return list(map(int,str(st)))