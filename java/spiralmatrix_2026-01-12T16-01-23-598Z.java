/*
Title: java/spiralmatrix_2026-01-12T16-01-23-598Z.java
Date: 12/01/2026, 9:31:44 pm
Description: Compiler Version
*/

// Java Example
import java.util.*;
public class Main {
    public static void main(String[] args) {
        int arr[][] = {{1,2,3},{4,5,6},{7,8,9},{10,11,12}};
        for(int i = 0; i<arr.length;i++){
            for(int j = 0; j<arr[0].length;j++){
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
        List<Integer> m = new ArrayList<>();
        int top = 0;
        int bottom = arr.length - 1;
        int left = 0;
        int right = arr[0].length - 1;
        while (top <= bottom && left <= right){
            for(int i = left; i<=right;i++)
                m.add(arr[top][i]);
            top++;
            for(int i = top; i <= bottom; i++)
                m.add(arr[i][right]);
            right--;
            if(top <= bottom){
                for(int i = right; i >= left; i--)
                    m.add(arr[bottom][i]);
                bottom--;
            }
            if(left <= right){
                for(int i = bottom; i >= top; i--)
                    m.add(arr[i][left]);
                left++;
            }
        }
       System.out.println(m); 
    }
}