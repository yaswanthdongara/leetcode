/*
Title: spiral_matrix_2026-01-12T16-15-56-407Z.java
Description: 54
Date: 12/01/2026, 9:45:56 pm
*/

class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> m = new ArrayList<>();
        int top = 0;
        int bottom = matrix.length-1;
        int left = 0;
        int right = matrix[0].length-1;
        while(top <= bottom && left <= right){
            for(int i = left; i<=right ; i++)
                m.add(matrix[top][i]);
            top++;
            for(int i = top; i<=bottom; i++)
                m.add(matrix[i][right]);
            right--;
            if(top <= bottom){
                for(int i = right; i>=left;i--)
                    m.add(matrix[bottom][i]);
                bottom--;
            }
            if(left <= right){
                for(int i = bottom ;i >= top; i--)
                    m.add(matrix[i][left]);
                left++;
            }
        }
    return m;
    }
}