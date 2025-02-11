{/*

1. Hamming Distance
Easy

3902

223

Add to List

Share
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them.

 

Example 1:

Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
Example 2:

Input: x = 3, y = 1
Output: 1
 

Constraints:

0 <= x, y <= 231 - 1
 

Note: This question is the same as 2220: Minimum Bit Flips to Convert Number.

    Solution:
    class Solution {
    public int hammingDistance(int x, int y) {
        int xor = x ^ y;  // Step 1: XOR the numbers
        int count = 0;
        
        // Step 2: Count the number of 1s (Brian Kernighan’s Algorithm)
        while (xor != 0) {
            count += xor & 1;  // Check the last bit
            xor >>= 1;         // Right shift to check the next bit
        }
        
        return count;
    }
}

*/}