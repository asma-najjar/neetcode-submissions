class Solution {
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let res = 0;

        while (left < right) {
            const containerLength = right - left;
            const area =
                containerLength * Math.min(heights[left], heights[right]);
            res = Math.max(res, area);
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return res;
    }
}
