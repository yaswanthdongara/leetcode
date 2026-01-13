/*
Title: spiral_matrix_2026-01-13T04-24-05-372Z.py
Description: 54
Date: 13/01/2026, 9:54:05 am
*/

class Solution(object):
    def spiralOrder(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[int]
        """
        l = []
        top = 0
        bottom = len(matrix)-1
        left = 0
        right = len(matrix[0])-1
        while top<=bottom and left<=right:
            for i in range(left,right+1):
                l.append(matrix[top][i])
            top += 1
            for i in range(top,bottom+1):
                l.append(matrix[i][right])
            right -= 1
            if top <= bottom:
                for i in range(right,left-1,-1):
                    l.append(matrix[bottom][i])
                bottom -= 1
            if left <= right:
                for i in range(bottom,top-1,-1):
                    l.append(matrix[i][left])
                left += 1
        return l

        